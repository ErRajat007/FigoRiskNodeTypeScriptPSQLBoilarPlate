
import jose from "node-jose";
import { memoize } from "lodash";
import { Request, Response, NextFunction } from 'express';

const createSecretKey = async () => {
  // const keyId: any = process.env.PRIMARY_SECRET_KEY_ID;
  // const secKey: any = process.env.PRIMARY_SECRET_KEY;
  const key = {
    use: "sig",
    alg: "RS256",
    n: "r54td3hTv87IwUNhdc-bYLIny4tBVcasvdSd7lbJILg58C4DJ0RJPczXd_rlfzzYGvgpt3Okf_anJd5aah196P3bqwVDdelcDYAhuajBzn40QjOBPefvdD5zSo18i7OtG7nhAhRSEGe6Pjzpck3wAogqYcDgkF1BzTsRB-DkxprsYhp5pmL5RnX-6EYP5t2m9jJ-_oP9v1yvZkT5UPb2IwOk5GDllRPbvp-aJW_RM18ITU3qIbkwSTs1gJGFWO7jwnxT0QBaFD8a8aev1tmR50ehK-Sz2ORtvuWBxbzTqXXL39qgNJaYwZyW-2040vvuZnaGribcxT83t3cJlQdMxw",
    kid: "acda360fb36cd15ff83af83e173f47ffc36d111c",
    kty: "RSA",
    e: "AQAB",
  };
  const secretKey = await jose.JWK.createKey("RSA", 2048, key);

  return { secretKey, key };
};

const memoizedCreateSecretKey = memoize(createSecretKey);

const getToken = async (payload: object) => {
  const { secretKey } = await memoizedCreateSecretKey();
  const signer = jose.JWS.createSign({ format: "compact" }, secretKey);
  // Update the signer with the payload
  const token = await signer.update(JSON.stringify({ ...payload })).final();
  return token;
};

export const createTokens = async (payload: any) => {
  !("isLoggedIn" in payload)
    ? Object.assign(payload, { isLoggedIn: false })
    : "";
  !("exp" in payload)
    ? Object.assign(payload, { exp: Math.floor(Date.now() / 1000) + 3600 })
    : "";
  const token = await getToken(payload);
  return { token };
};

export const createRefreshTokens = async (payload: any) => {
  // const exp = Math.floor(Date.now() / 1000) + 604800; // valid for 7 days
  const exp = Math.floor(Date.now() / 1000) + 60; // Add 60 seconds (1 minute)
  const refreshToken = await getToken({
    isLoggedIn: true,
    exp,
    type: 'refreshToken',
    AuthEmail: payload.AuthEmail,
    userID: payload.userID,
  });
  return { refreshToken };
};


export const decodeToken =async(token:any)=>{
  try{
  const { secretKey } = await memoizedCreateSecretKey();
  const result = await jose.JWS.createVerify(secretKey).verify(token);
  const payload = JSON.parse(result.payload.toString());
  return payload 
  }catch(error){
  return error;
  }
}
export const verifyToken = async (userToken:any,res:Response) => {
    try {
      // const token = getTokens(userToken);
      const payload = await decodeToken(userToken);
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (payload && payload.exp > currentTimestamp) {
        return {success:true,data:payload};
      } else {
        return {success:false,data:''}; 
      }
    } catch (error) { 
      console.error("Error:", error);
      return res.status(401).json({ success: false, message:error });
    }
  };

export const getTokens = (headers: any) => {
    const bearerToken = headers.authorization;
    // console.log("bearerToken==>"+bearerToken)
    if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
      return null;
    }
    return bearerToken.slice(7);
  };


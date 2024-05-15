import jose from 'node-jose';
import { Request, Response, NextFunction } from 'express';
import {getTokens} from '../../utils/createTokens'

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string = getTokens(req.headers);
    const publicKey = {
        kty: 'RSA',
        e: 'AQAB',
        n: 'r54td3hTv87IwUNhdc-bYLIny4tBVcasvdSd7lbJILg58C4DJ0RJPczXd_rlfzzYGvgpt3Okf_anJd5aah196P3bqwVDdelcDYAhuajBzn40QjOBPefvdD5zSo18i7OtG7nhAhRSEGe6Pjzpck3wAogqYcDgkF1BzTsRB-DkxprsYhp5pmL5RnX-6EYP5t2m9jJ-_oP9v1yvZkT5UPb2IwOk5GDllRPbvp-aJW_RM18ITU3qIbkwSTs1gJGFWO7jwnxT0QBaFD8a8aev1tmR50ehK-Sz2ORtvuWBxbzTqXXL39qgNJaYwZyW-2040vvuZnaGribcxT83t3cJlQdMxw',
      };
      

    
      // Create a verifier using the public key
    const verifier = jose.JWS.createVerify(publicKey);


    // Verify the token's signature and expiration
    const result = await verifier.verify(token);
    console.log("omksjkdfdhk" +result);
    // If the verification is successful, 'result' will contain the payload
    // You can parse it to access the token's content
    const payload = JSON.parse(result.payload.toString());

    // Check the token's expiration (exp claim)
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp > currentTimestamp) {
      return payload;
    } else {
      throw new Error('Token has expired');
    }
    
  } catch (error) {
    console.error('Token verification failed:', error);
   return res.json({error})
  }
};

// const auth = async (req: Request, res: Response, next: NextFunction) => {
//     try {
       

//         const publicKey={
//             "kty": "RSA",
//             "e": "AQAB",
//             "use": "sig",
//             "n": "4vyFXuLY-TYXo6JiAavfDbGSv2kGQQ-HLz2tbRFzibIASYV1M4W9xKGmLfyohZy4V0lGCAOb1icOfSiGLujuIQpJSne2Lj4nl2IkyTMF6uuqLi_mTAPdwy5-SXbh-f0YffJeni7Zsbdiz28N950Ukqk7JtnNlOGA_7eN9jaMyfyf4LJ9nuW8vQBGrAUtcghtZrka_y8RwJ4ApOwsZ_M7GUV0MyqppRuX-deQSRZUPAxQcKNPzr5zNx9li2xDn9dsMx101TpQ94t0BHqSsuh3W8KfcNMWZ5lbVdEzFCFg1ar3KTDmfSc8qem5RqF_oD7wWmxMimxqz52UntZGI8xVNw"
//         }
        
//         const keystore = jose.JWK.createKeyStore();
//         const token = getTokens(req.headers);
//               // Create a verifier using the public key
//               let checkPublicKey = keystore.get('acda360fb36cd15ff83af83e173f47ffc36d111c'); // Use the correct kid.

//                 if (!publicKey) {
//                 console.error('Public key not found in keystore.');
//                 return;
//                 }
              
//               const verifier = jose.JWS.createVerify(publicKey);
//                 console.log("###############################verifier"+JSON.stringify(verifier))
//               // Verify the token's signature and expiration
//               const result = await verifier.verify(token);
//               console.log("###############################result"+JSON.stringify(result))
//               // If the verification is successful, 'result' will contain the payload
//               // You can parse it to access the token's content
//               const payload = JSON.parse(result.payload.toString());
          
//               // Check the token's expiration (exp claim)
//               const currentTimestamp = Math.floor(Date.now() / 1000);
//               if (payload.exp && payload.exp > currentTimestamp) {
//                 return payload;
//               } else {
//                 throw new Error('Token has expired');
//               }
             
          
          
//     } catch (error) {
//       console.error('Token verification failedok:', error);
//      return res.json({error})
//     }
//   };

export { auth };

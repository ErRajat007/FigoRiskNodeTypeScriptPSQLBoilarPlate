import e, { Request, Response } from "express";
import {decodeToken,getTokens} from '../utils/createTokens'
import {
  createUser,
  getUserDetails,
  updateUser,
  getMeeDetailService
} from "../services/userServices";
const fs = require("fs");

export const addUser = async (_req: any, res: Response) => {
  try {
    const data = await createUser(_req, _req.file.filename, _req.file.path);
    return res
      .status(200)
      .send({ message: "User added successfully", data: data });
  } catch (err) {
    fs.unlink(`${_req.file.path}`, (err: any) => {
      if (err) {
        console.error(err);
        return;
      }
      //file removed
    });
    console.log("***", err);
    return res.status(500).send({ error: err });
  }
};
export const getUser = async (_req: Request, res: Response) => {
  try {
    const user = await getUserDetails(_req.params.id);
    return user
      ? res
          .status(200)
          .send({ success: true, message: "User details found", data: user })
      : res.status(404).send({ success: false, message: "User not found" });
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

export const updateUserImage = async (_req: Request, res: Response) => {
  try {
    const user = await getUserDetails(_req.params.id);
    if (user) {
      const updatedUser = await updateUser(
        user.dataValues.displayPicture,
        _req.params.id
      );
      updatedUser &&
        fs.unlink(
          `public/images/${user.dataValues.displayPicture}`,
          (err: any) => {
            if (err) {
              console.error(err);
              return;
            }
            //file removed
          }
        );
      res.status(200).send({
        success: true,
        message: "User Image updated",
        data: updatedUser,
      });
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

export const getMeeDetails = async (req: Request, res: Response) => {
  try {
    const token = getTokens(req.headers)
    const tokenPayload = await decodeToken(token)
   

    const meeDetails= await getMeeDetailService(tokenPayload.value)
    return meeDetails ? res.status(200).send({ success: true, message: "User details !", data: meeDetails })
      : res.status(404).send({ success: false, message: "User details not found" });
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

import UserModel from "../models/User.model.js";
import HttpStatus from "../constants/httpStatus.js";
import { issueJwt } from "../utils/jwt.js";

const register = async (req, res, next) => {
  const { password, ...userdata } = req.body;

  let existinguser;

  existinguser = await UserModel.findOne({ email: userdata.email });

  if (existinguser) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      message: "email already exists",
      success: false,
    });
  }

  existinguser = await UserModel.findOne({ username: userdata.username });

  if (existinguser) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      message: "username already exists",
      success: false,
    });
  }

  try {
    const newuser = await UserModel.create({ ...userdata, hash: password });

    const { access_token, refresh_token } = issueJwt(
      newuser._id,
      newuser.email,
      newuser.username
    );

    res.cookie("accessToken", access_token, {
      httpOnly: true,
      maxAge: 900000,
      sameSite: "Strict",
      secure: true,
    });

    res.cookie("refreshToken", refresh_Token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "Strict",
      secure: true,
    });

    res.status(HttpStatus.CREATED).json({
      message: "User created successfully",
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

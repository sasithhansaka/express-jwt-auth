import { hash } from "bcrypt";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  hash: {
    type: String,
    required: true,
  },
  saly: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    validate: {
      validator: function (m) {
        const slMobileRegex = /^(?:\+94|0)7[01245678]\d{7}$/;
        return slMobileRegex.test(m);
      },
      message: "Mobile number is invalid",
    },
  },
  postal_code: {
    type: String,
    validate: {
      validator: function (code) {
        return /^\d{5}$/.test(code);
      },
      message: "Invalid postal code",
    },
  },

});

const UserModel = model("User", UserSchema);

export default UserModel;

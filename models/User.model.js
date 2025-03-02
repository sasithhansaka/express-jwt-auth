import { hash } from "bcrypt";
import mongoose from "mongoose";
import { applyPasswordValidatingandHashing } from "../utils/hashUtils.js";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: {
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
  salt: {
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

function isStrongPassword(password) {
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
}

UserSchema.pre("save", function (next) {
  if (this.isModified("hash") && !isStrongPassword(this.hash)) {
    return next(
      new Error(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
    );
  }
  next();
});


applyPasswordValidatingandHashing(UserSchema);


const UserModel = model("User", UserSchema);

export default UserModel;

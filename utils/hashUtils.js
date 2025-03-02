import crypto from 'crypto';


const hashPassword = (password) => {
    const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "RSA-SHA1")
    .toString("hex");
  return { salt, hash };
}

const applyPasswordValidatingandHashing = (schema) => {
    schema.pre("save", function (next) {
        if (!this.isModified("hash")) return next();
    
        const { hash, salt } = hashPassword(this.hash);
        this.hash = hash;
        this.salt = salt;
        next();
 } )}


const checkPassword = ([password,hash,salt])=>{
    const validatedHashed = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "RSA-SHA1")
    .toString("hex");

  return hash === validatedHashed;
}

export {hashPassword,applyPasswordValidatingandHashing,checkPassword};
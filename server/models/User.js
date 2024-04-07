import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {type: String, require: true},
    registrationNo: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    position: {type: String, require: true},
    password: {type: String, require: true}

})

const UserModel = mongoose.model("User",UserSchema)

export {UserModel as User}
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    profilepic: {
        type: String,
        default: ""
    }

}, { timestamps: true }) 

const User = mongoose.model("User", UserSchema);
export default User;

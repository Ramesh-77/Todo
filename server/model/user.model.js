import { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
    }, 
    password: {
        type: String, 
        required: true, 
        trim: true
    }
}, {timestamps: true});

// to hide password field when sending user object as response
userSchema.methods.toJSON = function() {
    const obj = this.toObject(); // this will convert mongoose document to plain js object
    delete obj.password; // remove password field
    return obj;
}



export const User = model("user", userSchema);


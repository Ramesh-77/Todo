import {Schema, model} from "mongoose";
const objectId = Schema.Types.ObjectId
const todoScehma = new Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    }, 
    description: {
        type: String,
    },
    status: {
        type: String, 
        enum: ["pending", "in-progress", "completed"],
        default: "pending"
    },
    creatorId: {
        type: objectId,
        ref: "user"
    }
}, {timestamps: true})


// remove creatorId from the response
todoScehma.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.creatorId;
    return obj;
}

export const Todo = model("todo", todoScehma);
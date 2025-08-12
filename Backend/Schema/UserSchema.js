import { Schema, model } from "mongoose";

// Schema for user
const userSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    profile_image:{
        type:String,
        default:''
    },
    

},{timestamps:true});

export const User = model("User",userSchema);
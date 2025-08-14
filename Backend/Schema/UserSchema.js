import { Schema, model } from "mongoose";

// Schema for user
const userSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true,
        trim:true
    },
    username:{
        type:String,
        required: true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength: [10,"Password must be at least 8 characters long"],
    },
    profile_image:{
        type:String,
        default:''
    },
    

},{timestamps:true});

export const User = model("User",userSchema);
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
        trim:true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]

    },
    username:{
        type:String,
        required: true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength: [10,"Password must be at least 8 characters long"],
        validate: {
        validator: function(v) {
            // At least 1 uppercase, 1 lowercase, 1 number
            return /[A-Z]/.test(v) && /[a-z]/.test(v) && /[0-9]/.test(v);
        },
        message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"
    }
    },
    profile_image:{
        type:String,
        default:''
    },
    

},{timestamps:true});

export const User = model("User",userSchema);
import mongoose from "mongoose";
// Function to connect to database
export const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.CONNECT_STRING);
        console.log("CONNECTED TO DATABASE")
    }catch(err){
        console.error(err)
    }
}
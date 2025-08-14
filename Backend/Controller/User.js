import { User } from "../Schema/UserSchema.js";

export const getUserData = async(req,res) =>{
    const user = req.user
    if(!user) return res.status(401).json({error:true,message:"Unauthorized user."});
    try{
        const userData = await User.findById({_id:user._id});
        if(!userData) return res.status(401).json({error:true,message:"Unauthorized user."})
        return res.status(200).json({error:false,message:"User data",user:userData})

    }catch(err){
        console.error(err)
    }
}
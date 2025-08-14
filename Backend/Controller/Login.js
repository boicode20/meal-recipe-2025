import { User } from "../Schema/UserSchema.js";
import { comparePassword } from "../PasswordBcrypt/ComparePassword.js";
import { generateToken } from "../Middleware/Token.js";


export const login = async (req,res) =>{
    const {username,password} = req.body
    if(username===''||password==='') return res.status(400).json({error:true,message:"Please fill all fields."})
    try{
        const user = await User.findOne({username});
        if(!user) return res.status(400).json({error:true,message:"Username not found."});
        const checkPassword = comparePassword(password,user);
        if(!checkPassword) return res.status(400).json({error:true,message:"Incorrect password."});
        
        const token = await generateToken(res,user);
        res.status(200).json({error:false,message:"Login successful",token:token})



    }catch(err){
        console.error(err)
    }
}
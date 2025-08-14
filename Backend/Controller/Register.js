import { hashPassword } from "../PasswordBcrypt/Hashpassword.js";
import { User } from "../Schema/UserSchema.js";
import validator from 'email-validator'

export const register = async(req,res) => {
    const {fullname,email,username,password} = req.body
    // check email
    const isEmailValid = validator.validate(email)

    if(fullname==''||email==''||username==''||password=='') return res.status(400).json({error:true,message:"Please fill all fields"});
    if(!isEmailValid) return res.status(400).json({error:true,message:"Invalid email addresss."});
    if(password.length < 8 ) return res.status(400).json({error:true,message:"Password must be 8 characters or more."});
    try{

        // Check if username or email is exist
        const existUsername = await User.findOne({username})
        const existEmail = await User.findOne({email})
        if(existEmail||existUsername) return res.status(400).json({error:true,message:"Username or email is already taken."})
        
        const hashPass = hashPassword(password)
        const newUser ={
            fullname,
            email,
            username,
            password:hashPass
        }
        await User.create({fullname:newUser.fullname,email:newUser.email,username:newUser.username,password:newUser.password})
        return res.status(201).json({error:false,message:"Registration successfuly."})
    }catch(err){
        console.log(err)
        res.status(400).json({error:err})
    }
}
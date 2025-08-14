import jwt from 'jsonwebtoken';
// Secret key
const secret_key = process.env.JWT_SECRET || "asjdkaljsd829138askjdkaj8ASS81*20@34@34590%%231aaxc9492918c";

// Generate token for user payloads
export const generateToken = (res,user) =>{
    const token = jwt.sign({
        _id:user._id,
        fullname:user.fullname,
        username:user.username,
        email:user.email,
        profile_image:user.profile_image

    },secret_key,{
        expiresIn:"7d"
    });

    res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"Strict",
            maxAge:7 * 24 * 60 * 60 *1000
        });
}
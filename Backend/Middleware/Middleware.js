import jwt from 'jsonwebtoken'
const secret_key = process.env.JWT_SECRET || "asjdkaljsd829138askjdkaj8ASS81*20@34@34590%%231aaxc9492918c";
export const middleware = async(req,res,next)=>{
    const token = req.cookies.token;
     if(!token) return res.status(401).json({error:true,message:"Access denied. Token is missing"});
    try{
        const decoded = jwt.verify(token,secret_key);
        req.user = decoded;
        next();
    }catch(err){
        console.error(err)
    }
}
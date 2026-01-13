import jwt from "jsonwebtoken";
//protect routes
export const protect=(req,res,next)=>{
    const token=req.cookies.toekn;
    if(!token){
        return res.status(401).json({message:"first Login",success:false})
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    } catch (error) {
        return res.status(401).json({message:"Invalid token"})
    }
}



//admin check

export const adminOnly=(req,res,next)=>{
   const token=req.cookies.token;
    if(!token){
      return res.status(401).json({message:"Not Authorized",success:false})
   }
   try {
      const decoded=jwt.verify(token,process.env.JWT_SECRET);
      req.admin=decoded;
      if(req.admin.email===process.env.ADMIN_EMAIL){
         next();
      }
   } catch (error) {
           res.status(401).json({ message: "Invalid token" });
   }
}
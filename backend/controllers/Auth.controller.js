import { handleError } from '../Errorhandler/handlingerror.js';
import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';



export const signUp=async(req,res,next)=>{
    try{
   const{email,password}=req.body;
   const hashname= bcryptjs.hashSync(password,10);
   const response=new User({email,password:hashname});
   await response.save();
   res.status(201).json(response);
   }catch(error){
      console.log(error);
       next(error);  
    }
}
export const signIn=async(req,res,next)=>{
    const {email,password}=req.body;
    try{
    const validuser=await User.findOne({email});
    if(!validuser){return next(handleError(404,'invalid user email'))}
    const validpass= bcryptjs.compareSync(password,validuser.password);
    if(!validpass){return next(handleError(401,'Wrong credentials'))}
    const token=jwt.sign({id:validuser._id},process.env.JWT_SECRET)
    const {password:pass,...rest}=validuser._doc;
    res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
  }catch(error){
    console.log(error);
      next(error);
  }
  }
  export const signOut = async (req, res, next) => {
    try {
      res.clearCookie('access_token');
      res.status(200).json('User has been logged out!');
    } catch (error) {
      next(error);
    }
  }
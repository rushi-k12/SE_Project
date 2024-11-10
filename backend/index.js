import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Authrouter from "./routes/Auth.route.js"
import cookieParser from 'cookie-parser';

dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
mongoose.connect(process.env.URI).then(()=>{
    console.log("database connected succesfully");
    app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("server is running on port 3000");})
}).catch((error)=>{
    console.error("Database connection failed:", error.message);

})
app.use("/api/auth",Authrouter);   
// app.use("/api/user",userRouter);    
// app.use("/api/listing",listingRouter); 

// app.use(express.static(path.join(path.resolve(), 'my-project/dist')));

// // Anything that doesn't match the API routes should be handled by the React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(path.resolve(), 'my-project','dist', 'index.html'));
// });

app.use((err,req,res,next)=>{
    const message=err.message || "internal error"
    const statuscode= err.statuscode||500
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message,
    })
  

})

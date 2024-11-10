import express from "express";
 const router=express.Router();
 import { signUp,signIn,signOut } from "../controllers/Auth.controller.js";


router.post("/signup",signUp);
router.post("/signin",signIn);
router.get("/signout",signOut)



export default router;
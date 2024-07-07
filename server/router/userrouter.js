import express from "express"
import { login } from "../login.js";
import { register } from "../register.js";
const userrouter=express.Router();
userrouter.post("/login",login);
userrouter.post("/register",register);
userrouter.get("/",(req,res)=>{
    res.send({
        message:"hello ji"
    })
});
export default userrouter;
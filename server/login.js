import { user, investor } from "./schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const login=async(req,res)=>{
    const {email,password}=req.body;
    const b=await user.findOne({email});
    if(b){
        const match = await bcrypt.compare(password, b.password);
        if(match){
            const codedid = jwt.sign({ _id: b._id }, "abcdefgh");
            // console.log(b.name)
            res.cookie("token", codedid, {
                httpOnly: true,
                expires: new Date(Date.now() + 20 * 1000 * 60),
                sameSite: "none",
                secure: true,
            }).json({
                sucess: true,
                message: "logedin",
                name:b.name
            })
        }
        else{
            res.status(400).send({
                message:"Incorrect password",
                success:false
            })
        }
    }
    else{
        res.status(400).send({
            message:"User not found",
            success:false
        })
    }
}
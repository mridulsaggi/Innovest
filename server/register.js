import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express";
import { user } from "./schema.js";
const app=express();
// config({path:"../config.env"})
// app.use(cp());
app.use(express.urlencoded({extended:true}))
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const aa = await user.findOne({ email });
    if (aa) {
        res.send({
            message: "User already exists"
        })
    }
    else {
        const hashedpass = await bcrypt.hash(password, 10)
        const a = await user.create({
            name, email, password: hashedpass
        })
        // 
        const codedid = jwt.sign({ _id: a._id }, "fghj");
        res.cookie("token", codedid, {
            httpOnly: true,
            expires: new Date(Date.now() + 20 * 1000 * 60),
            sameSite: "none",
            secure: true,
        }).json({
            sucess: true,
            message: "user reg successfully:)"
        })
    }
}

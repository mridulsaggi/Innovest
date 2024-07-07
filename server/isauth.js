import jwt from "jsonwebtoken";
import cp from "cookie-parser";
import express from "express";
const app=express();
app.use(cp());
import { user } from "./schema.js";
export const isauth = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const decodedid = jwt.verify(token, process.env.secretkey)
        req.user = await user.findById(decodedid);
        next();
    }
    else{
        res.status(400).send({
            success:false,
            message:"please login first"
        })
    }
}
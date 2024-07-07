import express from "express";
import { postIdea, getIdea } from "../showcase.js";

const showcaserouter = express.Router();
showcaserouter.post("/", postIdea);
showcaserouter.get("/", getIdea);

export default showcaserouter;

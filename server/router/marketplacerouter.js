import express from "express";
import { postStartup, getStartup } from "../marketplace.js";

const marketplacerouter = express.Router();
marketplacerouter.post("/", postStartup);
marketplacerouter.get("/", getStartup);

export default marketplacerouter;

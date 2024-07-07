import express from "express";
import cors from 'cors';
import connectDB from "./connection.js";
import userrouter from "./router/userrouter.js";
import marketplacerouter from "./router/marketplacerouter.js";
import showcaserouter from "./router/showcaserouter.js";

const app = express();
connectDB();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true, // to make cookie accessible on frontend also because this allows the cookie to be accessible on different domains.
}));
                                                                                                        
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userrouter);
app.use("/marketplace", marketplacerouter)
app.use("/showcase", showcaserouter)

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

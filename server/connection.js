import mongoose from "mongoose";
const connectDB = async () => {
    const conn=await mongoose.connect(process.env.databaseurl,{dbName:"InnoVest"}).then(()=>{
        console.log("MongoDB Connected");
    }).catch((err)=>{
        console.log(`error occured:(${err}`);
    })
}
export default connectDB

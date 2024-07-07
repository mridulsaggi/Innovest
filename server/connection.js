import mongoose from "mongoose";
const connectDB = async () => {
    const conn=await mongoose.connect("mongodb+srv://innovest:innovest@cluster0.vtkziqm.mongodb.net/",{dbName:"InnoVest"}).then(()=>{
        console.log("MongoDB Connected");
    }).catch((err)=>{
        console.log(`error occured:(${err}`);
    })
}
export default connectDB
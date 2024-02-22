import mongoose from "mongoose";
const DB_NAME="workout";
const MONGO_URI = process.env.MONG_URI;
 const connectDB= async()=>{
    try{
       const connectionInstance=await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    
    }
    catch(err){
        console.log("error",err);
        process.exit(1)
    }
}

export default connectDB
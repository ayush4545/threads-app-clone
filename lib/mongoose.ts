import mongoose from "mongoose";

let isConnected=false;

export const connectToDB=async()=>{
     mongoose.set('strictQuery',true)
     if(!process.env.MONGODB_URL) return console.log("Mongodb url not found")
     if(isConnected) return console.log("Already connected to mongodb");

     try {
          console.log(122,"yaha hu me")
          await mongoose.connect(process.env.MONGODB_URL);

          isConnected=true
          console.log("Connected to MongoDB")
     } catch (error) {
         console.log(error)
     }
}
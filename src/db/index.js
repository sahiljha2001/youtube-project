
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; 
//alwaus wrap database in try catch method and the second advise is db is always in another continent



const connectDb= async ()=>{
    try{
         const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         console.log(`\n mongodb connected !! dbhost
         ${connectionInstance.connection.host}`)

    }
    catch(error){
        console.log("mongodb connection failed" ,error);
        process.exit(1);
    }
}
export default connectDb;
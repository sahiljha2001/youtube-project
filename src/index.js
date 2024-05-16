import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";
dotenv.config({
    path:"./env"
})
import { app } from "./app.js";
connectDb().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port${process.env.PORT}`)
    })
     app.on("error" ,(error) =>{
        console.log('ERROR' , error);
        throw error
     })
}).catch((error)=>{
    console.log("monogo db connection failed !! ", error)
})


//  import express from "express";
//  const app= express();
// ( async ()=>{
// try{
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} `)
//      app.on("error" ,(error) =>{
//         console.log('ERROR' , error);
//         throw error
//      })
//      app.listen(process.env.PORT,()=>{
//         console.log(` app is running on port ${process.env.PORT}`)
//      })

    
// }
// catch(error){
//     console.error('ERROR', error)
//     throw error
// }
// })()
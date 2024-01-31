import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import { log } from 'console';
const port =4200;

const app = express();
app.use(express.json());
app.use(cors())

// db connection to mongodb

 mongoose.connect("mongodb+srv://jadhaomahesh1009:mahesh@cluster0.yh2upcz.mongodb.net/Ecommerce");

app.get("/",(req,res)=>{
    res.send("Express app is running")
})


 app.listen(port,(error)=>{
    if(!error){
        console.log("server Running on port", port)
    }
    else{
        console.log("Error:", error)
    }
 })
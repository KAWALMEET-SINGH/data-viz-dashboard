import express from "express";
import dotenv from 'dotenv';
import { connectToDB } from "./dB/connectToDb.js";
import dataRouter from './routes/data.router.js'
import DataModel from "./models/data.model.js";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use('/api', dataRouter);

//Error Middleware
app.use((err,req,res,next)=>{
    const status = err.statusCode || 500 ;
    const message = err.message || "Internal Server Error";
    return res.status(status).json({
        success : false,
        statusCode:status,
        message
    })
})
app.listen(PORT,() =>{
connectToDB();

    console.log(`server started ${PORT}`);
    }
    );
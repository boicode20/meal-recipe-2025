import express from 'express';
import cookie from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import routes from './Routes/route.js';
import { connectDb } from './ConnectionDb/connectDb.js';

// Instance of express
const server = express();
const PORT = process.env.SERVER_PORT || 5050;

// Use accept json
server.use(express.json());
// Use cookie-parser
server.use(cookie());
// Use cors
server.use(cors({
    origin: process.env.ORIGIN_MAIN,
    credentials:true

}));

// Asyn function to run server and connect to db
const runServer = async() =>{
    try{
        await connectDb();
        server.listen(PORT,()=>{
        console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
        });
    }catch(err){
        console.error(err);
    }
};

// Run server
runServer();
// Use routes for endpoint
server.use('/backend-api',routes);
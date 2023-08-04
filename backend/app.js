import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';

// const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user",router); 
app.use("/api/blog", blogRouter); 

mongoose.connect('mongodb+srv://admin:4rpOMb8l7CyEOeAR@cluster0.9j3yngo.mongodb.net/Blog?retryWrites=true&w=majority').then(()=>app.listen(5000)).then(()=> console.log("Connect to Database and Listening to localhost 5000")).catch((err)=>console.log(err));



//4rpOMb8l7CyEOeAR
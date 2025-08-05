import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//Configuring middleware
// Cookie parser middleware
app.use(express.json({limit: "16kb"}));

// Cookie parser middleware:As deeksha hs can come as deeksha@hs or deekshs%30 so we use this
app.use(express.urlencoded({ extended: true,limit: "16kb" }));

//It is use to access the pdf files,et by anyone publically
app.use(express.static("public"));

//To read and set cookies by the browser
app.use(cookieParser());



//Routes import 
import userRoutes from './routes/user.routes.js';

//routes declaration and it acts as middleware
app.use('/api/v1/users',userRoutes);

//http://localhost:8000/api/v1/users/register

//export default app;  or
export {app};
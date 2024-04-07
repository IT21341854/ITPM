import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
// import { PORT, mongoDBURL} from "./config.js"
dotenv.config()
import { UserRouter } from './routes/user.js'
import cors from 'cors'


const PORT = 3000;

const app = express()

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));

app.use(cookieParser())
app.use('/auth',UserRouter)

const mongoDBURL = 'mongodb+srv://bima:1234@itpm.radgjez.mongodb.net/user?retryWrites=true&w=majority&appName=ITPM'
 
// app.get('/', (requset, response) => {
//     console. log (requset);
//     return response.status (234). send ('Welcome to MERN Stack Tutorial');
// })

mongoose. connect (mongoDBURL)
.then (() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is linsteng to port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});

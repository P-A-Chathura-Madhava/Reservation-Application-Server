import express from 'express';
import envs from 'dotenv';
import dbConnect from './config/dbConnect.js';
import authRoute from './routes/authRoute.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';
// import bodyParser from 'body-parser';

const app = express();
const dotenv = envs.config();
dbConnect();
const PORT = process.env.PORT || 4000;

// app.use('/', (req, res) => {
//     res.send("Server Response");
// })
app.use(express.json());
// app.use(bodyParser.json());
app.use("/api/v1/user", authRoute);

// middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
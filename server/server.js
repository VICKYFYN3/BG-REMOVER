import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';


// App Configuration
const port = process.env.PORT || 4000; 
const app = express();
await connectDB();

// INITIALIZE MIDDLEWARE
app.use(express.json());
app.use(cors());


// API routes
app.get('/',(req,res)=> res.send('API is Working'));

app.listen(port,() => console.log(`Server is running on port ${port}`));
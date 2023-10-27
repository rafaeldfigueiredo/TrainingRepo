import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import booksRoute from './routes/bookRoutes.js'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express(); app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type']
  }
))

app.use('/books', booksRoute)

mongoose
.connect(mongoDBURL)
.then(()=>{
  console.log('App connected.');
  app.listen(PORT, ()=>{console.log(`\nListening to port: http://localhost:${PORT}`)})
})
.catch((err)=>{
  console.log(err);
})
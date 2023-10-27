import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import booksRoute from './routes/bookRoutes.js';

const app = express(); app.use(express.json());

app.use(cors());

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
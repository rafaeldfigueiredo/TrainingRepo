import express from 'express';
import { PORT, mongoDBURL } from './config.js';

import mongoose from 'mongoose';
import { Book } from './models/bookModels.js';

const app = express(); app.use(express.json());

function errorMsg() {
  console.log(error);
  res.status(500).send({message: error.message})
}

app.get("/books", async (req,res)=>{
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data:books
    })
  } catch (error) {
    errorMsg()
  }
})

app.get("/books/:id", async (req,res)=>{
try{
  const {id} = req.params;
  const book = await Book.findById(id)
  return res.status(200).json({book})
} catch (error) {
    errorMsg()
  }})

app.post('/books', async (req,res)=>{
  try {
    if(!req.body.title || !req.body.author || !req.body.publishedYear){
      return res.status(400).send({message: "Send all required fields: title, author and published Year"})
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    }

    const book = await Book.create(newBook)

    return res.status(201).send(book)
  } catch (error) {
    errorMsg()
  }
})

app.put('/books/:id',async (req,res)=>{
  if(!req.body.title || !req.body.author || !req.body.publishedYear){
    return res.status(400).send({message: "Send all required fields: title, author and published Year"})
  }
  const {id} = req.params;
  const result = await Book.findByIdAndUpdate(id,req.body)
  if (!result){return res.status(404).json({message:'Book not found'})}
  return res.status(200).json({result})
})


app.delete('/books/:id',async (req,res)=>{
  const {id} = req.params;
  const result = await Book.findByIdAndDelete(id,req.body)
  if (!result){return res.status(404).json({message:'Book not found'})}
  return res.status(200).send({message: 'Book delete successfully!'})
})
mongoose
.connect(mongoDBURL)
.then(()=>{
  console.log('App connected.');
  app.listen(PORT, ()=>{console.log(`\nListening to port: http://localhost:${PORT}`)})
})
.catch((err)=>{
  console.log(err);
})
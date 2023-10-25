import express from 'express'
import {PORT, mongoDBURL} from './config.js'
import mongoose from 'mongoose'
import { Book } from './models/bookModels.js'

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
  return res
  .status(200)
  .send("Hello World")
})

app.post('/books', async (req,res)=>{
  try {
    if(!req.body.title || !req.body.author || !req.body.publishedYear){
      return res.status(400).send({message:"Send all required fields: title, author and publishedYear"})
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    }

    const book = await Book.create(newBook)

    return res.status(201).send(book)
  } catch (error) {
    console.log(error.message);
    res.status(500).send({message:error.message})
  }
})

app.get("/books", async(req,res)=>{
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data:books
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({message: error.message})
  }
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
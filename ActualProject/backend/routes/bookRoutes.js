
import express from 'express'
import { Book } from './models/bookModels.js';
const router = express.Router()


function errorMsg() {
    console.log(error);
    res.status(500).send({message: error.message})
  }

router.get("/", async (req,res)=>{
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

router.get("/:id", async (req,res)=>{
    try{
      const {id} = req.params;
      const book = await Book.findById(id)
      return res.status(200).json({book})
    } catch (error) {
        errorMsg()
      }})
    
    router.post('/books', async (req,res)=>{
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
    
    router.put('/books/:id',async (req,res)=>{
      if(!req.body.title || !req.body.author || !req.body.publishedYear){
        return res.status(400).send({message: "Send all required fields: title, author and published Year"})
      }
      const {id} = req.params;
      const result = await Book.findByIdAndUpdate(id,req.body)
      if (!result){return res.status(404).json({message:'Book not found'})}
      return res.status(200).json({result})
    })
    
    
    router.delete('/books/:id',async (req,res)=>{
      const {id} = req.params;
      const result = await Book.findByIdAndDelete(id,req.body)
      if (!result){return res.status(404).json({message:'Book not found'})}
      return res.status(200).send({message: 'Book delete successfully!'})
    })
export default router
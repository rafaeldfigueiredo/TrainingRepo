import express from 'express'
import Dog from './app.js'
const korone = new Dog("Korone","brown")

const app = express()


app.get("/",(req,res)=>{
  res.send(korone.getName())
})

app.listen(8080)
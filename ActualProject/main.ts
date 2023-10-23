import express from 'express'

let app = express()

app.get('/',(req,res)=>{
  res.send("<h1>Neuro</h1>")
})

app.listen(8080)
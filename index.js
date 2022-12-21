const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./files'))

app.all('*',(req,res)=>{
    res.status(404).send('The file does not exist on the server!')
})

app.listen(5000,()=>{
    console.log('server listening on http://localhost:5000/')
})
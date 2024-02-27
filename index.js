
const express = require('express')

const app = express()

const port = 7000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send('singh61402')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at rajdeep</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send("<h2>CHAI aur Code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
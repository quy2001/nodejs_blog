const express = require('express')
const app = express()
const port = 3000

app.get('/trang_chu', (req, res) => {
  res.send('Hello World, i am Quy bye bye bye')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
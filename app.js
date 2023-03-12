// @ts-check
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 4001

app.use('/', (req, res) => {
  res.send('로그인페이지')
})
// const mainRouter = require("./routes");
app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버실행`)
})

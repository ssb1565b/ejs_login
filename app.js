// @ts-check
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 4001

const mainRouter = require('./routes')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', mainRouter)

// 이게 왜 실행 안되고 위에거가 실행되는지 문의드리기
app.get('/', (req, res) => {
  res.send('Hello, Express world')
})

app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버실행`)
})

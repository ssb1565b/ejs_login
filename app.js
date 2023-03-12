// @ts-check

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 4000

app.use('/',(req,res) => {
    res.send('로그인 페이지 입니다.')
})

app.use((err,req,res,next) => {
    console.log(err.stack)
    res.status(err.statusCode)
    res.send(err.message + `<br/> <a href="/">홈으로</a>`)
})

app.listen(PORT, () => {
    console.log(`${PORT} 번에서 로그인 페이지 실행`)
})
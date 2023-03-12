const express = require('express')

const router = express.Router()

const USER = []

router.get('/', (req, res) => {
  res.render('login')
  // views의 파일을 읽어오겠다는 뜻
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (req.body) {
    const newUser = {
      id: req.body.id,
      pw: req.body.pw,
    }
    USER.push(newUser)
    res.redirect('/')
  } else {
    const err = new Error('로그인 실패')
    err.statusCode = 400
    throw err
  }
})

module.exports = router

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

// 新建app
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
// 跟`/user`相关的接入 userRouter来接管
app.use('/user',userRouter)

app.listen(9093, function(){
  console.log('Node app start at port 9093')
})
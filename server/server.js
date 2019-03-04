const express = require('express')
const userRouter = require('./user')

// 新建app
const app = express()
// 跟`/user`相关的接入 userRouter来接管
app.use('/user',userRouter)

app.listen(9093, function(){
  console.log('Node app start at port 9093')
})
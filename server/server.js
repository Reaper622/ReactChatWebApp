const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')
// 新建app
const app = express()

// work with express
const server = require('http').Server(app)
// 绑定express 与 socket.io
const io = require('socket.io')(server)

io.on('connection', function(socket){
  socket.on('sendmsg',function(data){
    const {from, to, msg} = data
    const chatid = [from, to].sort().join('_')
    Chat.create({chatid, from, to, content:msg},function(err, doc){
      io.emit('recvmsg', Object.assign({},doc._doc))
    })
  })
})

const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
// 跟`/user`相关的接入 userRouter来接管
app.use('/user',userRouter)

server.listen(9093, function(){
  console.log('Node app start at port 9093')
})
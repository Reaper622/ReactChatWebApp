# 基于 React  +  Node.js + MongoDB 实现的一款人才招聘在线聊天WebApp

## 开发目录
### 第一部分 登录注册功能的实现
> 完成时间: 2019/3/5

#### 实现功能点:
- 用户注册并向`MongoDB`存入数据
- 登录通过向`MongoDB`查对数据来验证登录
- 实现登录的验证(路由守卫)
- Cookie存储用户信息 (使用了`cookie-parser`)
- Redux管理数据状态(使用了`react-redux`)
- 路由的基础管理
- 用户存储密码的加密(使用了`utility`,通过`md5` + 本地加盐的方式加密)


### 第二部分 完成了基本功能页面（列表页面以及完善信息页面）
> 完成时间: 2019/3/12

#### 实现功能点
- 完善个人信息功能
- boss 登录进入牛人页面
- 牛人登录进入 boss 页面
- 个人中心信息的展示
- 注销功能（清除cookie内信息）
- 高阶组件扩展表单功能

### 第三部分 完成了聊天功能
> 完成时间: 2019/3/16

#### 实现功能点
- 实时通信(`socket.io`)
- 实现消息列表
- 点击消息进入聊天页
- 未读消息展示
- 根据最新消息排序

## 如何启动

首先，克隆仓库到本地

```
git clone https://github.com/Reaper622/ReactChatWebApp.git
cd ReactChatWebApp
```

之后安装依赖

```
npm install
```

然后开启服务

```
npm start
```

之后访问 [Locahost:3000/Login](http://localhost:3000/login) 即可

接着需要启动 Server (推荐使用 `nodemon`可动态检测文件更改并重新部署)

```
nodemon ./server/server.js
```

还需要启动 MongoDB，这部分不详细写出，具体可参考[如何使用MongoDB](https://www.yiibai.com/mongodb/mongodb_quick_guide.html)

## 功能演示

注册功能

![注册](http://pogagi0sc.bkt.clouddn.com/register.jpg)

登录功能:

![登录](http://pogagi0sc.bkt.clouddn.com/login.jpg)

主页:

![主页](http://pogagi0sc.bkt.clouddn.com/geniushome.jpg)

发送信息:

![发送信息](http://pogagi0sc.bkt.clouddn.com/send.jpg)

消息列表:

![消息列表](http://pogagi0sc.bkt.clouddn.com/msglist.jpg)

个人中心:

![个人中心](http://pogagi0sc.bkt.clouddn.com/personalinfo.jpg)

聊天过程实际演示：（若要测试需打开两个不同的浏览器）

![聊天](http://pogagi0sc.bkt.clouddn.com/chat.gif)



## License

[MIT](https://mit-license.org/)
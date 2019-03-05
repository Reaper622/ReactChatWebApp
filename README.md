# 基于 React + Redux + Router + Node.js 实现的一款人才招聘在线聊天WebApp

## 第一部分 登录注册功能的实现
> 完成时间: 2019/3/5
###实现功能点:
- 用户注册并向`MongoDB`存入数据
- 登录通过向`MongoDB`查对数据来验证登录
- 实现登录的验证(路由守卫)
- Cookie存储用户信息 (使用了`cookie-parser`)
- Redux管理数据状态(使用了`react-redux`)
- 路由的基础管理
- 用户存储密码的加密(使用了`utility`,通过`md5` + 本地加盐的方式加密)

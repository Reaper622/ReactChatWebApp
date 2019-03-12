import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import imoocForm from '../../component/imooc-form/imooc-form'

// class Hello extends React.Component{
//   render(){
//     return <h2>Hello imooc i love React</h2>
//   }
// }

// // 属性代理
// function WrapperHello(Comp){
//   class WrapComp extends React.Component{
//     render(){
//       return (
//         <div>
//         <p>这是HOC高阶组件特有的元素</p>
//         <Comp name='text' {...this.props}></Comp> 
//       </div>
//       )
//     }
//   }
//   return WrapComp
// }
// Hello = WrapperHello(Hello)

@connect(
  state => state.user,
  {login}
)
@imoocForm
class Login extends React.Component{
  constructor(props) {
    super(props);
    this.register = this.register.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  register(){
    console.log(this.props);
    this.props.history.push('/register')
  }
  handleLogin(){
    this.props.login(this.props.state)
  }
  render(){
    return (
      <div>
        {this.props.redirectTo && this.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <WingBlank>
          {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
          <List>
            <InputItem onChange={v=> this.props.handleChange('user',v)}>用户</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={v=> this.props.handleChange('pwd',v)}>密码</InputItem>
          </List>
          <Button type="primary" onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
import React from 'react'
import { connect } from 'react-redux'
import {List} from 'antd-mobile'

@connect(
  state => state
)
class Msg extends React.Component{
  getLast(arr){
    return arr[arr.length - 1]
  }
  render(){

    const Item = List.Item
    const Brief = Item.Brief
    const userid = this.props.user._id
    const userinfo = this.props.chat.users
    // console.log(this.props)
    // 按照聊天用户分组， 根据chatid分组
    const msgGroup = {}
    this.props.chat.chatmsg.forEach( v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    const chatList = Object.values(msgGroup)
    return (
      <div>
        <List>
          {chatList.map(v => {
            console.log(v)
            const lastItem = this.getLast(v)
            const targetId = v[0].from === userid ? v[0].to : v[0].form
            if(!userinfo[targetId]) {
              return null
            }
            return (
              <List key={lastItem._id}>
                <Item
                  thumb={require(`../img/${userinfo[targetId].avatar}.png`)}
                  >
                  {lastItem.content}
                  <Brief>{userinfo[targetId].name}</Brief>
                </Item>
              </List>
            )
            })}
        </List>
      </div>
    )
  }
}

export default Msg
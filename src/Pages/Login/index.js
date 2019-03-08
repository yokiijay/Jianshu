import React, { PureComponent, Fragment } from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

// Components

class Login extends PureComponent {
  render(){
    return(
      <Fragment>
      {
        !this.props.loginStatus ?
        <LoginWrapper>
          <LoginPanel flexDirection='column'>
            <h3>登陆</h3>
            <input ref={ref=>this.account=ref} className='account' type="text" placeholder='📮  手机号或邮箱' />
            <input ref={ref=>this.password=ref} className='password' type="password" placeholder='⌨️  密码' />
            <button onClick={()=>this.props.login(this.account,this.password)}>登录</button>
          </LoginPanel>
        </LoginWrapper>
        :
        <Redirect to='/' />
      }
      </Fragment>
    )
  }
}

const LoginPanel = styled(Flex) `
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 496px;
  padding: 50px;
  background: white;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  border-radius: 4px;
  h3{
    margin-bottom: 70px;
    font-size: 28px;
    color: #ea6f5a;
    text-align: center;
    font-weight: 700;
    &:before {
      content: '';
      display: block;
      position: relative;
      width: 70px;
      height: 4px;
      background: #ea6f5a;
      margin: 0 auto;
      top: 40px;
    }
  }
  input{
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    padding: 4px 12px;
    font-size: 14px;
    color: #333;
    background: hsla(0,0%,71%,.1);
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    &::placeholder { color: #969696;}
    &.account { border-bottom: none; border-bottom-left-radius: 0; border-bottom-right-radius: 0 }
    &.password { border-top-left-radius: 0; border-top-right-radius: 0 }
  }
  button{
    margin-top: 40px;
    width: 300px;
    height: 43px;
    padding: 9px 18px;
    border: none;
    border-radius: 25px;
    background: #3194d0;
    font-size: 18px; color: white;
  }
`
const LoginWrapper = styled(Flex) `
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
`

const mapState = (state, props)=>({
  loginStatus: state.getIn(['login','login'])
})
const mapDispatch = (dispatch, props)=>({
  login(account,password){
    const getAuth = ()=>(
      (dispatch, getState)=>{
        axios.get(`/api/login.json?account=${account}&password=${password}`)
        .then(res=>{
          console.log(res.data.identify)
          if(res.data.identify){
            const action = { type: 'LOGIN' }
            const goOn = window.confirm('密码正确, 是否继续？')
            if(goOn){
              alert('success')
              dispatch(action)
            }
          }else {
            alert('登录失败')
          }
        })
        .catch(err=>console.log(err))
      }
    )
    dispatch(getAuth())
  },
})

export default connect(mapState,mapDispatch)(Login)
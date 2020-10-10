import React from 'react';
import styles from './Login.module.css';
import loginSideImage from '../../assets/dropout.png'
import PreloginHeader from '../../components/PreloginHeader';
import { Input, Checkbox } from 'antd';
import './styles.css'
import Axios from 'axios';
export default class Signin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
    }
  }
  login=a=>{
    Axios.post('http://localhost:3002/login',{username: this.state.email, password: this.state.password}).then(e=>{
      console.log(e)
      var response = e.data
      localStorage.setItem('access-token',response.accessToken)
      window.location.pathname = '/home'
    }).catch(f=>{
     alert(f)
    })
  }
  render(){
  return(
    <div>
        <PreloginHeader isLogin={true} history={this.props.history}/>
        <div className={styles.loginWrapper}>
 <img src={loginSideImage} alt=""/>
<div className={styles.rightWrapper}>
    <span className={styles.headText}>Login to your app</span>
    <span className={styles.subText}>To make a workspace from scratch, please confirm your email address</span>
    <span className={styles.label}>User Name</span>
<Input placeholder="Enter your user name" onChange={e=>this.setState({email: e.target.value})}/>
<span className={styles.label}>Password</span>
<Input.Password visibilityToggle={false} placeholder="Enter your password" onChange={e=>this.setState({password: e.target.value})}/>
<div className={styles.footerText}>
  <span className={styles.remindme}><Checkbox/>Remind me</span><span className={styles.forgot}>Forgot password</span>
</div>
<span onClick={()=>this.login()} className={styles.button}>Sign in</span>
</div>
        </div>
  </div>
  )}
}


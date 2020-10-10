import React from 'react';
import styles from './Login.module.css';
import loginSideImage from '../../assets/login.png'
import PreloginHeader from '../../components/PreloginHeader';
import { Input } from 'antd';
export default class Login extends React.Component {
  render(){
  return(
    <div>
        <PreloginHeader history={this.props.history}/>
        <div className={styles.loginWrapper}>
 <img src={loginSideImage} alt=""/>
<div className={styles.rightWrapper}>
    <span className={styles.headText}>Make Your Life Easy with Intranet</span>
    <span className={styles.subText}>To make a workspace from scratch, please confirm your email address</span>
    <span className={styles.label}>Email address</span>
<Input className={styles.input} placeholder="name@email.com"/>
<span onClick={()=>this.props.history.replace('/confirmemail')} className={styles.button}>Confirm Email</span>
</div>
        </div>
  </div>
  )}
}


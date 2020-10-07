import React from 'react';
import styles from './Login.module.css';
import loginSideImage from '../../assets/login.png'
import PreloginHeader from '../../components/PreloginHeader';
import { Input } from 'antd';
import './styles.css'
export default class Login extends React.Component {
  render(){
  return(
    <div>
        <PreloginHeader/>
        <div className={styles.loginWrapper}>
 <img src={loginSideImage}/>
<div className={styles.rightWrapper}>
    <span className={styles.headText}>Make Your Life Easy with Intranet</span>
    <span className={styles.subText}>To mae a workspace from scratch, please confirm your email address</span>
    <span className={styles.label}>Email address</span>
<Input placeholder="name@email.com"/>
<span className={styles.button}>Confirm Email</span>
</div>
        </div>
  </div>
  )}
}


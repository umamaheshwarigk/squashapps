import React from 'react';
import styles from './styles.module.css';
import loginSideImage from '../../assets/dropout.png'
import PreloginHeader from '../../components/PreloginHeader';
import { Input } from 'antd';
export default class ConfirmEmail extends React.Component {
  render(){
  return(
    <div>
        <PreloginHeader history={this.props.history}/>
        <div className={styles.loginWrapper}>
 <img src={loginSideImage}/>
<div className={styles.rightWrapper}>
    <span className={styles.headText}>We’ve sent you a mail!</span>
    <span className={styles.subText}>To make a workspace from scratch, please confirm your email address.</span>
    <span className={styles.label}>Enter your verification code</span>
<Input className={styles.otpInput}/>
<Input className={styles.otpInput}/>
<Input className={styles.otpInput}/>
<Input className={styles.otpInput}/>
<Input className={styles.otpInput}/>
<Input className={styles.otpInput}/>
<span className={styles.button} onClick={()=>this.props.history.replace('/signup1')}>Submit</span>
</div>
        </div>
  </div>
  )}
}


import React from 'react';
import styles from './style.module.css';
import loginSideImage from '../../../assets/dropout.png'
import PreloginHeader from '../../../components/PreloginHeader';
import { Input } from 'antd';
// import './styles.css'
export default class Signup2 extends React.Component {
  render(){
  return(
    <div>
        <PreloginHeader isLogin={true} history={this.props.history}/>
        <div className={styles.loginWrapper}>
 <img src={loginSideImage} alt=""/>
<div className={styles.rightWrapper}>
    <span className={styles.headText}>Create Personal Password</span>
    <span className={styles.subText}>To make a workspace from scratch, please confirm your email address</span>
    <table><tr>
    <td>
<span className={styles.label}>First Name</span>
<Input placeholder="Enter your first name"/> 

    </td>
    <td className={styles.rightData}>
<span className={styles.label}>Last Name</span>
<Input placeholder="Enter your last name"/>

    </td>
    </tr></table>
<span className={styles.label}>Password</span>
<Input.Password visibilityToggle={false} placeholder="Enter your password"/>

<span onClick={()=>this.props.history.replace('/login')} className={styles.button}>Complete</span>
</div>
        </div>
  </div>
  )}
}


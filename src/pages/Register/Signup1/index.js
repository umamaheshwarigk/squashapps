import React from 'react';
import styles from './style.module.css';
import loginSideImage from '../../../assets/dropout.png'
import PreloginHeader from '../../../components/PreloginHeader';
import { Input, Checkbox } from 'antd';
// import './styles.css'
export default class Signup1 extends React.Component {
  render(){
  return(
    <div>
        <PreloginHeader isLogin={true} history={this.props.history}/>
        <div className={styles.loginWrapper}>
 <img src={loginSideImage}/>
<div className={styles.rightWrapper}>
    <span className={styles.headText}>Setup Your Application</span>
    <span className={styles.subText}>To make a workspace from scratch, please confirm your email address</span>
    <span className={styles.label}>Company Name</span>
<Input placeholder="Enter your company name"/>
<table><tr>
    <td>
<span className={styles.label}>Location</span>
<Input placeholder="Enter your location"/> 

    </td>
    <td className={styles.rightData}>
<span className={styles.label}>No of Employees</span>
<Input placeholder="Enter number of exployees"/>

    </td>
    </tr></table>
    <table width="100%">
        <tr>
            <td style={{minWidth:"80%"}}>
<span className={styles.label}>Domain Name</span>
<Input placeholder="Customize your domain name"/>

            </td>
            <td>
<span className={styles.subdomain}>.intranet.com</span>

            </td>
        </tr>
    </table>

<span onClick={()=>this.props.history.replace('/signup2')} className={styles.button}>next</span>
</div>
        </div>
  </div>
  )}
}


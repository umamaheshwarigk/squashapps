import React from 'react';
import styles from './styles.module.css';
import emailIcon from '../../assets/email.png'
export default class PreloginHeader extends React.Component {
  render(){
  return (
    <div className={styles.headerWrapper}>
        <span className={styles.headText}>
            SA-INTRANET
        </span>
        <div className={styles.rightContent}>
            <span style={{color:'#3BC163'}}>
                Login
            </span>
            <span style={{display:'flex',alignItems:'center'}}>
                <img src={emailIcon} style={{paddingRight: '10px'}}/>
                <span style={{color:'#A1A6A9;'}}>support@squashapps.com</span>
            </span>
        </div>
    </div>
  )}
}


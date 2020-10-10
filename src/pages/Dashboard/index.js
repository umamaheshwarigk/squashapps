import React from 'react';
import styles from './Dashboard.module.css';
import {Menu, Button} from 'antd' 
import './styles.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
import closeIcon from '../../assets/close.svg'
const { Search } = Input;


export default class Dashboard extends React.Component {
  constructor(props){
super(props)
    this.state={
        collapsed: false,
        sideMenu: false
    }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  showSideMenu=()=>{
    this.setState({sideMenu: !this.state.sideMenu})
  }
  render(){
  return(
    <div style={{height:'100%'}}>
 <div style={{ width: 256, background:'#284255', height:'100%', float:'left' }}>
     <span className={styles.headtext}>SA-INTRANET</span>   <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" >
            Announcement
          </Menu.Item>
          <Menu.Item key="2" onClick={()=>{
             localStorage.clear();
           window.location.pathname="/"
           }}>
             Log out
             
          </Menu.Item>
          </Menu>
          </div>
          <div className={styles.contentContainer}>
            <span className={styles.header}>Announcement</span>
            <div className={styles.content}>
            <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    /><span className={styles.addAnnouncement} onClick={()=>this.showSideMenu()}>+ Add Announcement</span>
          </div>
          </div>
          {this.state.sideMenu && <div className={styles.backWrapper}>
            <div className={styles.rightWrapper}>
<img src={closeIcon} className={styles.closeIcon} onClick={()=>this.setState({sideMenu:false})} alt=""/>
            </div>
            </div>}
  </div>
  )}
}


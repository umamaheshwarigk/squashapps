import React from 'react';
import styles from './Dashboard.module.css';
import {Menu, Button} from 'antd' 
import './styles.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
export default class Dashboard extends React.Component {
  constructor(props){
super(props)
    this.state={
        collapsed: false,
    }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
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
          <Menu.Item key="2" >
            Log out
          </Menu.Item>
          </Menu>
          </div>
          <div className={styles.contentContainer}>
            <span className={styles.header}>Announcement</span>
            <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
          </div>
  </div>
  )}
}


import React, { Component } from 'react'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Top extends Component {
  render() {
    return (
      <Menu theme="dark" mode="horizontal"
        defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
        <Menu.Item key="1">导航一</Menu.Item>
        <Menu.Item key="2">导航二</Menu.Item>
        <Menu.Item key="3">导航三</Menu.Item>
      </Menu>
    );
  }
};
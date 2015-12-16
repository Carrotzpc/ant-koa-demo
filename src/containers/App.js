import React from 'react';
import Top from '../components/Top'
import { Menu, Breadcrumb, Calendar } from 'antd';

const App = React.createClass({
  render() {
    return (
      <div className="ant-layout-top">
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <div className="ant-layout-logo"></div>
            <Top />
          </div>
        </div>
        <div className="ant-layout-subheader">
          <div className="ant-layout-wrapper">
            <Menu mode="horizontal"
              defaultSelectedKeys={['1']} style={{marginLeft: 124}}>
              <Menu.Item key="1">二级导航</Menu.Item>
              <Menu.Item key="2">二级导航</Menu.Item>
              <Menu.Item key="3">二级导航</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="ant-layout-wrapper">
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div style={{ height: 210 }}><Calendar /></div>
          </div>
        </div>
        <div className="ant-layout-footer">
          此demo由@<a target="_blank" href="https://github.com/Carrotzpc">Carrotzpc</a>编写，Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
        </div>
      </div>
    )
  }
})

export default App
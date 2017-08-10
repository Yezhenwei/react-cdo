/*
 * 主页头部
 * Date 2016-12-15
 * Author Yezhenwei
 */

import React, { Component, PropTypes } from "react";
import { Modal, Icon, message, Row, Col, Menu, Switch, Input, Form } from 'antd';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
const SubMenu = Menu.SubMenu;

class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "user"
        };
    }

    /*
  * 左侧导航栏点击
  * @param e Menu的key
  * @return message 操作结果
  */
    handleClick(e) {
        this.setState({
            current: e.key
        });
        browserHistory.push('/' + e.keyPath[0]);
    }
render() {
    return (
        <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="inline" className="manage-sider">
            <SubMenu key="" title={
                <span><Icon type="appstore-o" />
                    <span>
                        React Demo
                    </span>
                </span>}>
                <Menu.Item key="state">
                    <span>State</span>
                </Menu.Item>
                <Menu.Item key="props">
                    <span>Props</span>
                </Menu.Item>
                <Menu.Item key="redux">
                    <span>Redux</span>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}
}

export default Sider;
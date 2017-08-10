/*
 * 后端主页头部
 * Date 2016-12-15
 * Author Yezhenwei
 */
import React, { Component } from 'react'
import { Modal, Icon, message, Row, Col, Menu, Switch, Input, Form } from 'antd';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
const SubMenu = Menu.SubMenu;
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        this.close = this._close.bind(this);
        this.logout = this._logout.bind(this);
    }


    /*
 * 注销
 * @param null
 * @return message 操作消息
 */
    _logout() {
        Modal.confirm({
            title: '您是否要退出系统',
            //确认事件
            onOk: () => {
                cookie.remove("loginUser");
                browserHistory.push("/login");
            }
        });
    }

    //密码修改弹框关闭
    _close() {
        this.setState({ visible: false });
    }

    render() {
        const that = this;
        const user = cookie.load("loginUser");
        return (
            <div className="header-control">
                <Row>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 10 }} lg={{ span: 8 }}>
                        <span className="text-left"><b></b> 后台管理</span>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 8, offset: 4 }} md={{ span: 10 }} lg={{ span: 8, offset: 8 }} >
                        <span className="text-right">
                            <span>您好，{user ? user.name : ""}</span>
                            <span className="sep">|</span>
                            <span onClick={this.logout} style={{ cursor: 'pointer' }} ><Icon type="logout" />&nbsp;退出</span>
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;
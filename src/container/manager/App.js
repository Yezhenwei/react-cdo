/*
 * 后台系统组件拼接
 * Date 2016-12-8
 * Author Yezhenwei
 */
import React, { Component } from 'react'
import Header from './Header';
import Sider from './Sider';
import { message, Row, Col } from 'antd';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

class App extends Component {

	componentWillMount() {
	}

	componentWillReceiveProps(nextProps) {
	}

	componentDidMount() {
		window.addEventListener("beforeunload", this.removeUser);
	}

	componentWillUnmount() {
		window.removeEventListener("beforeunload", this.removeUser);
	}

	removeUser() {
		cookie.remove("loginUser");
	}

	render() {
		return (
			<div className='banner'>
				<Header></Header>
				<Row className="content">
					<Col xs={{ span: 9 }} sm={{ span: 5 }} md={{ span: 4 }} lg={{ span: 4 }} className="sider"><Sider /></Col>
					<Col xs={{ span: 15 }} sm={{ span: 16 }} md={{ span: 20 }} lg={{ span: 20 }} className="panel">{this.props.children}</Col>
				</Row>
			</div>
		)
	}
}



export default App;
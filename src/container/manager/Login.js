/*
 * 后端登录界面
 * Date 2016-12-15
 * Author Yezhenwei
 */
import React, { Component, PropTypes } from 'react'
import { Form, Input, Button, Checkbox, Icon, message } from 'antd';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import { connect } from 'react-redux';
import { login } from "../../store/manager/actions/User";

const FormItem = Form.Item;
const createForm = Form.create;
const InputGroup = Input.Group;
class Login extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this._handleSubmit.bind(this)
	}

	/*
   * 登录
   * @param formValues 账号密码
   * @return message 操作结果
   */
	_handleSubmit() {
		this.props.form.validateFields((errors, values) => {
			if (errors) {
				console.log('form error!!!');
				return;
			} else {
				this.props.dispatch(login(Object.assign({}, this.props.form.getFieldsValue(), { state: 1 }), (res) => {
					if (res.status == 1) {
						message.success(res.msg);
						cookie.save('loginUser', res.user);
						browserHistory.push('/state');
					} else {
						message.error(res.msg);
					}
				}));
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const LoginForm = () => {
			return (
				<div>
					<div className="login-text">系统登录</div>
					<Form>
						<FormItem>
							<InputGroup style={{ width: "100%" }}>
								{getFieldDecorator('id', {
									rules: [
										{
											required: true,
											whitespace: true,
											message: '账号不能为空！',
										}
									]
								})(
									<Input placeholder="请输入账户" autoComplete="off" addonBefore={<span style={{ fontSize: '20px' }}><Icon type='user' /></span>} />
									)}
							</InputGroup>
						</FormItem>
						<FormItem>
							<InputGroup style={{ width: "100%" }}>
								{getFieldDecorator('password', {
									rules: [
										{
											required: true,
											whitespace: true,
											message: '密码不能为空！',
										}
									]
								})(
									<Input type="password" autoComplete="off" placeholder="请输入密码" addonBefore={<span style={{ fontSize: '20px' }}><Icon type='lock' /></span>} />
									)}
							</InputGroup>

						</FormItem>
						<Button type="primary" htmlType="submit" onClick={this.handleSubmit} style={{ fontSize: '15px' }} >登录</Button>
					</Form>
				</div>
			)
		};
		return (
			<div className="login-banner">
				<div className='login-logo'></div>
				<div className="login-form">
				</div>
				<div className="formlayout">
					{LoginForm()}
				</div>
			</div>
		);
	}
}
Login = createForm()(Login);

module.exports = connect(state => state)(Login);
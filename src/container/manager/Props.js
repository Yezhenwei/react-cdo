/*
 * 欢迎界面
 * Date 2017-2-17
 * Author Yezhenwei
 */
import React from 'react';
import { Input, Row, Col } from 'antd';
class Props extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleClick(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const HelloMessage = React.createClass({
            render: function () {
                return <h1>我是子组件 {this.props.name}</h1>;
            }
        });
        return (
            <Row>
                <Col span={10} offset={5}>
                    <HelloMessage name='我是父组件的值' />
                </Col>
            </Row>
        )
    }
}

export default Props;
/*
 * 欢迎界面
 * Date 2017-2-17
 * Author Yezhenwei
 */
import React from 'react';
import {
    Input,
    Row,
    Col,
    Button
} from 'antd';
class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value,
            show: ''
        })
    }

    handleClick() {
        this.setState({
            show: this.state.show === '' ? 'none': ''
        })
    }

    render() {
        return (
            <Row style={{fontSize: 20}}>
                <Row style={{textAlign: 'center'}}>
                    <Col span={10} offset={5}>
                        值测试：请输入内容
                <Input
                            onChange={this.handleChange.bind(this)}
                            value={this.state.value}
                        />
                        你输入的内容:
                {this.state.value}
                    </Col>
                </Row>
                <Row>
                    <Col span={5}>UI测试：</Col>
                    <Col span={10} style={{ backgroundColor: 'black', display: `${this.state.show}` , color: 'white'}}>
                        是否显示的这个部分
                    </Col>
                    <Col>
                        <Button
                            type='primary'
                            onClick={this.handleClick.bind(this)}
                            >
                            点击控制显隐
                        </Button>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default State;
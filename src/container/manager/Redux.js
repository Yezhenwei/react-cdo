/*
 * 欢迎界面
 * Date 2017-2-17
 * Author Yezhenwei
 */
import React from 'react';
import {
    Input,
    Button,
    Row,
    Col
} from 'antd';
import { plus } from "../../store/manager/actions/Operate";
import { minus } from "../../store/manager/actions/Operate";
import { connect } from 'react-redux';

class Redux extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePlusClick() {
        console.log(this.props)
        this.props.dispatch(plus());
    }

    handleMinusClick() {
        this.props.dispatch(minus());
    }

    render() {
        return (
            <Row >
                <Col span={10} offset={5}>
                    请输入内容：
                    <Input
                        value={this.props.value}
                    />
                    <Button
                        type='primary'
                        onClick={this.handlePlusClick.bind(this)}
                    >
                        plus
                    </Button>
                    <Button
                        type='primary'
                        onClick={this.handleMinusClick.bind(this)}
                        style={{marginLeft: 20}}
                    >
                        minus
                    </Button>
                </Col>
            </Row >
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.value
    }
}

export default connect(mapStateToProps)(Redux)

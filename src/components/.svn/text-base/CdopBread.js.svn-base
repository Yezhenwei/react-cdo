/*
 * 简单面包屑封装 
 * Date 2016-12-19
 * Author Yezhenwei
 * data:数据
 */
import React, {Component, PropTypes} from "react";
import { Breadcrumb, Icon } from 'antd';

export default class CdopBread extends Component{
	constructor(props){
	    super(props);
	   
	}
	componentDidMount() {
		
	}

  render() {
  	const bread = data => data.map((item) => {
      return <Breadcrumb.Item href={item.link}>{item.name}</Breadcrumb.Item>;
    });
		
	    return (
	      <Breadcrumb>
				<Breadcrumb.Item href="">
      			主页
    			</Breadcrumb.Item>
    			{bread(this.props.data)}
  			</Breadcrumb>
	    )
	}

}

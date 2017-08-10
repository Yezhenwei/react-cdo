/*
 * 表格封装 
 * Date 2016-12-13
 * Author Yezhenwei
 * columns：表格列描述数据对象
 * dataSource：表格数据
 * pagination ：分页器
 * pageSize:每页显示多少
 * rowSelection: 选择器
 *
 */
import React, {Component, PropTypes} from "react";
import { Input, Select, Button, Icon ,Table, Card } from 'antd';

export default class CdopTable extends Component{
	constructor(props){
	    super(props);
	    this.state={
		    loading: false,
		    pageSize:this.props.pageSize?this.props.pageSize:10,
		    current:this.props.dataSource.data?this.props.dataSource.data.current:1
	    };
	   
	}
	componentWillMount(){
		this.setState({
			loading: true,
		});
	}
	
	componentDidount(){
		setTimeout(() => {
			that.setState({
				loading: false,
			});
        }, 100);
	}
	
	componentWillReceiveProps(){
		const that = this;
		setTimeout(() => {
			that.setState({
				loading: false,
			});
    }, 100);
	}
	
	showTotal(total) {
	  return `共 ${total} 条`;
	}
	
	handleTableChange(pagination, filters, sorter){
		this.setState({
			loading: true,
			pageSize:pagination.pageSize,
			current:pagination.current
		});
		const current =  pagination.current;
		const pagesize = pagination.pageSize;
		
		if(this.props.postconfig){
			
			this.props.dispatch(this.props.setgrid( Object.assign({},this.props.postconfig, {pageNum: current , pageSize:pagesize }), (res)=>{
	      		
	      			this.setState({ loading: false });
	     	 	
	  		}));
		}else{
			this.props.dispatch(this.props.setgrid({pageNum: current , page_size:pagesize }, (res)=>{
	      		
	      			this.setState({ loading: false });
	     	 	
	  		}));

		}
        
	}
	onRowClick(record, index){
		
	}
  render() {
  	const _this = this;
  	//分页器参数
  	const paginations = {
			  total: this.props.dataSource.total,
			  showSizeChanger: true,
			  pageSize:this.state.pageSize,
			  showTotal:this.showTotal,
			  showQuickJumper:true,
			  current:this.state.current == this.props.dataSource.current?this.state.current:this.props.dataSource.current,
			  pageSizeOptions:["10",'20','50','100']
		} 
	//勾选框参数
	const rowSelection = this.props.rowSelection? {
	  selectedRowKeys: this.props.rowSelection.selectedRowKeys?this.props.rowSelection.selectedRowKeys:"",
	  onChange(selectedRowKeys, selectedRows) {
	  	console.dir(selectedRowKeys)  
	  },
	  onSelect(record, selected, selectedRows) {
	    console.log(selected);
	  },
	  onSelectAll(selected, selectedRows, changeRows) {
	    console.log(selected);
	  },
	} : this.props.rowSelection;
	//表格宽度自适应参数
	const columnsSize= this.props.columns.length?this.props.columns.length: 0; 
    return (
      <Table
      	className="cdop-table"
      	columns={this.props.columns}
        rowKey={record => record.id}
        dataSource={this.props.dataSource?this.props.dataSource.list:""}
        pagination={paginations}
        loading={this.state.loading}
        onChange={this.handleTableChange.bind(this)}
        onRowClick={this.onRowClick.bind(this)}
        rowSelection={this.props.rowSelection?this.props.rowSelection:rowSelection}
        scroll={{ x: columnsSize*100 }}
      />
    );
	}
}

CdopTable.contextTypes={
 router  : React.PropTypes.object.isRequired,
 columns: React.PropTypes.array.isRequired,
 dataSource: React.PropTypes.array.isRequired,
 
};

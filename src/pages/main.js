import React from 'react';
import { Input, Col, Row, Table, Divider, Calendar, Button } from 'antd';

export default class extends React.Component {
	state = {
		data: [{
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			operate: 1
		}, {
			name: 'Jim Green',
			age: 12,
			address: 'London No. 1 Lake Park',
			operate: 3
		}, {
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
			operate: 5
		}],
		columns: [{
			title: '姓名',
			dataIndex: 'name',
			key: 'name',
		}, {
			title: '颜色',
			dataIndex: 'color',
			key: 'color'
		},{
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
			sorter: (a, b) => a.age - b.age,
			filtered: true,
			filters: [
				{ text: '小于20', value: 20 }
			],
			onFilter: (value, record) => record.age < 20
		}, {
			title: '住址',
			dataIndex: 'address',
			key: 'address',
		}, {
			title: '操作',
			dataIndex: 'operate',
			key: 'operate',
			render: (value, row) => (<Input type='number' defaultValue={value} onChange={e => this.handleChange(e.target.value, row)} />)
		}]
	}
	handleChange = (val, row) => {
		row.operate = val * 1;
		this.setState({})
	}
	getState = () => {
		console.log(this.state);
	}
	render() {
		return (
			<div style={{boxSizing:'border-box',padding: '20px'}}>
				<Row>
					<Col span={6} push={9}>
						<Input.Search
							placeholder="input search text"
							onSearch={value => console.log(value)}
							enterButton
						/>
					</Col>
				</Row>
				<Divider />
				<Button type='danger' onClick={this.getState}>
					send
				</Button>
				<Table bordered={true} rowKey='name' dataSource={this.state.data} columns={this.state.columns} />
			</div>
		)
	}
}


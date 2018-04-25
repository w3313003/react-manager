import React from 'react';
import { Input, Col, Row, Table, Divider } from 'antd';


export default class extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6} push={9}>
                        <Input.Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </Col>
                </Row>
                <Divider/>
                <Table />
            </div>
        )
    }
}
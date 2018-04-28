import React, { Component } from 'react';
import { Form, Input, Icon, Row, Col, Button, Cascader, Slider } from 'antd'
import { connect } from 'react-redux';
import data from '../util/area'

@connect(
    state => ({
        menus: state.menus
    }),
    null
)
class Tform extends Component {
    state = {
        username: '',
        password: '',
        nickname: ''
    };
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <div>

                <Row>
                    <Col span={8} offset={4}>
                        <Form >
                            <Form.Item label='用户名' {...formItemLayout}>
                                {this.props.form.getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                    validateTrigger: 'onBlur',
                                    initialValue: this.state.username
                                })(
                                    <Input
                                        autoComplete='off'
                                        placeholder='请输入用户名'
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    />
                                )}
                            </Form.Item>
                            <Form.Item label='密码' {...formItemLayout}>
                                {this.props.form.getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                    validateTrigger: 'onBlur',
                                    initialValue: this.state.password
                                })(
                                    <Input
                                        autoComplete='off'
                                        placeholder='请输入密码'
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item label='昵称' {...formItemLayout}>
                                {this.props.form.getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: '请输入昵称!' }],
                                    validateTrigger: 'onBlur',
                                    initialValue: this.state.nickname
                                })(
                                    <Input
                                        autoComplete='off'
                                        placeholder='请输入昵称'
                                        prefix={<Icon type="smile-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="text"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item label='地区' {...formItemLayout}>
                                {this.props.form.getFieldDecorator('area', {
                                    rules: [{ required: true, message: '请选择地区' }],
                                    triggle: 'onBlur'
                                })(
                                    <Cascader
                                        options={data}
                                        showSearch={true}
                                        placeholder='请选择地区'
                                        onChange={(value, selectedOptions) => {
                                            console.log(value);
                                            console.log(selectedOptions);
                                        }} style={{ width: '300px' }}
                                    />
                                )}
                            </Form.Item>
                            <Form.Item label='百分比' {...formItemLayout}>
                                {this.props.form.getFieldDecorator('progress', {
                                    rules: [{ required: true, message: '请选择地区' }]
                                })(
                                    <Slider
                                        marks={{ 0: 'A', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }}
                                    />
                                )}
                            </Form.Item>
                        </Form>
                    </Col>

                </Row>
                <Row>
                    <Button onClick={() => {
                        this.props.form.validateFields((err, value) => {
                            if (!err) {
                                console.log(value);
                            }
                        })
                    }}>
                        提交
                    </Button>
                </Row>
            </div>
        )
    }
}

export default Form.create()(Tform)


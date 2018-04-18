import React from 'react';
import { Row, Col } from 'antd';
import { Form, Icon, Input, Button, notification } from 'antd';
import { withRouter } from 'react-router-dom';
import { FormHOC } from '../components/higherOrderComponent/index'
import axios from '../axios/index';
import { connect } from 'react-redux';
import action from '.././store/action';
const mapDispatchToProps = dispatch => {
    return {
        setMenus(menus) {
            function S2N(arr) {
                arr.forEach(v => {
                    if (v.child && v.child.length > 0) {
                        S2N(v.child)
                    };
                    v.id = String(v.id);
                });
                return arr
            };
            dispatch(action.SET_CURRENT_MENUS(S2N(menus)));
        },
        setAuth(bool) {
            dispatch(action['SET_AUTH'](bool));
        }
    }
}
@connect(
    null,
    mapDispatchToProps
)
class Login extends React.Component {
    check = () => {
        this.props.form.validateFields(
            (err, value) => {
                if (!err) {
                    console.log(value)
                    axios.post('http://192.168.31.205:8080/login', {
                        username: value.username,
                        password: value.password
                    }).then(res => {
                        if (res.data.code === 0) {
                            notification.success({
                                message: '登陆成功',
                                description: res.data.msg,
                                duration: 2
                            });
                            setTimeout(() => {
                                this.props.history.replace('/main')
                                sessionStorage.setItem('auth', true);
                                sessionStorage.setItem('menus', JSON.stringify(res.data.data.menus));
                                this.props.setMenus(res.data.data.menus);
                                this.props.setAuth(true)
                            }, 1000);
                        };
                    });
                    return;
                }
            },
        );
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='loginWrap'>
                <Row>
                    <Col offset={9} span={6}>
                        <div className='loginBox'>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                    initialValue: this.props.username,
                                    validateTrigger: 'onBlur',
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入用户名"
                                        onChange={e => this.props.handleChange('username', e.target.value)}
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!', }],
                                    validateTrigger: 'onBlur',
                                    initialValue: this.props.password,
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        onChange={e => this.props.handleChange('password', e.target.value)}
                                    />
                                )}
                            </Form.Item>
                            <div style={{ margin: 'auto' }}>
                                <Button icon="login" type='primary' onClick={this.check}>
                                    登陆
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const WrappedLoginForm = Form.create()(withRouter(Login));

export default FormHOC(WrappedLoginForm);

import React, {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from "antd/lib/form/Form";

import {phone, password} from '../../utils/reg';

import './login.less'

interface State {
    account: string
    password: string
}
interface IFormComponentProps extends FormComponentProps, RouteComponentProps {
    test: string;
}
class Login extends Component<IFormComponentProps, State> {
    readonly state = {
        account: '',
        password: ''
    }
    handleSubmit (e: any) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.history.push('/')
          }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="login-content">
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ 
                                required: true,
                                pattern: phone, 
                                message: '手机号不正确'
                            }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ 
                                required: true, 
                                pattern: password,
                                message: '密码必须包含字母和数字6-12位' 
                            }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox className="remember">记住密码</Checkbox>)}
                        <a className="login-form-forgot" href="/">
                            忘记密码
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styled from 'styled-components';
import Heading from '../common-items/heading';
import BoxDiv from '../common-items/box';
import LandingPage from '../../landing-page';
import { Link } from 'react-router-dom';

const StyledLogin = styled.div`
.login-form {
max-width: 300px;
}
.login-form-forgot {
// float: right;
}
.login-form-button {
width: 100%;

}
`
class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Username: ', values.username,
                    "Password: ", values.password
                );
            }
        });
    };
    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <StyledLogin>
                <Heading text="LOG IN HERE PLEASE" link='/mobile' />
                <BoxDiv>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
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
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                              </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </BoxDiv>
            </StyledLogin>

        );
    }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;

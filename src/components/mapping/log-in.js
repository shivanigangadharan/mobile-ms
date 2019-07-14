import React, { useContext } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BoxDiv from '../common-items/box';
import Auth from '../services/auth';
import { existingUserSignIN } from '../services/auth';
import List from '../mapping/list-screen';
import { getTokenID } from '../services/auth';
import firebase from 'firebase';
import testlogin from '../services/auth';
import { AuthContext } from '../../auth';
import { finallog } from '../services/auth';

const Heading = styled.div`
border: 1px solid black;
padding: 2%;
text-align: center;
font-size: 160%;
font-weight: bold;
width: 80%;
margin: 3%;
`
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
var em = "";
var p = "";

function NormalLoginForm(props) {
    const [user, setUser] = useContext(AuthContext);
    function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFields(async (err, values) => {
            if (!err) {
                em = values.email;
                p = values.password;
                existingUserSignIN(em, p);
            }
        });
    };
    const { getFieldDecorator } = props.form;
    return (
        <StyledLogin>
            <BoxDiv>
                <Heading> Log in here please </Heading>
                <Form onSubmit={e => { handleSubmit(e) }} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('email', {
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

                        {/* <Link to="/mobile/landingpage"> */}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                                </Button>
                        {/* </Link> */}
                        <Link to="/mobile/landingpage">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Move to next page
                                </Button>
                        </Link>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </BoxDiv>
        </StyledLogin>
    );

}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;
import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { UserActionsCreators } from '../../models/user/UserActionsCreators';
import { NavLink } from 'react-router-dom';

const NormalLoginForm = () => {
  const dispatch = useDispatch();
  const onFormSubmit = (values) => {
    if (values.username === undefined || values.password === undefined) return;
    if (values.username.trim() === '' || values.password.trim() === '') return;
    const user = { ...values };
    dispatch(UserActionsCreators.Login(user));
  };

  return (
    <div
      style={{
        maxWidth: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFormSubmit}
      >
        <Form.Item>
          <h1>Login!</h1>
        </Form.Item>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in
          </Button>
          Or{' '}
          <NavLink to={'/signup'} className='a' exact>
            register now!
          </NavLink>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NormalLoginForm;

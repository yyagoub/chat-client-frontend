import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NormalLoginForm from '../../components/forms/NormalLoginForm';
import { Login } from '../../models/user/UserActionsCreators';

const SigninView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserModel);
  const onFormSubmit = (values) => {
    if (values.username === undefined || values.password === undefined) return;
    if (values.username.trim() === '' || values.password.trim() === '') return;
    const user = { ...values };
    dispatch(Login(user));
  };
  return <NormalLoginForm user={user} onFormSubmit={onFormSubmit} />;
};

export default SigninView;

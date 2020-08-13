import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignupForm from '../../components/forms/SignupForm';
import { Signup } from '../../models/user/UserActionsCreators';

const SignupView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserModel);
  const onFormSubmit = (values) => {
    if (values.username === undefined || values.password === undefined) return;
    if (values.username.trim() === '' || values.password.trim() === '') return;
    const user = { ...values };
    dispatch(Signup(user));
  };
  return <SignupForm user={user} onFormSubmit={onFormSubmit} />;
};

export default SignupView;

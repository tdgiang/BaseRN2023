import React from 'react';
import {Text, View} from 'react-native';
import LoginView from './view';
const Login = ({params}) => {
  const onLogin = () => {
    console.log('Hello');
  };

  return <LoginView onLogin={onLogin} />;
};

export default Login;

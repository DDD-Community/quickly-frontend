import React, { FC } from 'react';
import Form from '@components/SignIn/Form';
import { SafeAreaView } from 'react-native';
import s from './styles';

const SignIn: FC = ({}) => {
  return (
    <SafeAreaView style={s.container}>
      <Form />
    </SafeAreaView>
  );
};

export default SignIn;

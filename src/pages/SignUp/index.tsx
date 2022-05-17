import React, { FC } from 'react';
import Form from '@components/SignUp/Form';
import { SafeAreaView } from 'react-native';
import s from './styles';

const SignUp: FC = ({}) => {
  return (
    <SafeAreaView style={s.container}>
      <Form />
    </SafeAreaView>
  );
};

export default SignUp;

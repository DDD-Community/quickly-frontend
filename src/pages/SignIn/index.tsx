import React, { ReactElement } from 'react';
import Form from '@components/SignIn/Form';
import { SafeAreaView } from 'react-native';
import s from './styles';
import { SignInScreenNavigationProp } from '~/types/navigation';

const SignIn = ({}: SignInScreenNavigationProp): ReactElement => {
  return (
    <SafeAreaView style={s.container}>
      <Form />
    </SafeAreaView>
  );
};

export default SignIn;

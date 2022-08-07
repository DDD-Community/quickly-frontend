import React, { ReactElement } from 'react';
import Form from '@components/SignUp/Form';
import { SafeAreaView } from 'react-native';
import s from './styles';
import { SignUpScreenNavigationProp } from '~/types/navigation';

const SignUp = ({
  navigation,
  route,
}: SignUpScreenNavigationProp): ReactElement => {
  return (
    <SafeAreaView style={s.container}>
      <Form />
    </SafeAreaView>
  );
};

export default SignUp;

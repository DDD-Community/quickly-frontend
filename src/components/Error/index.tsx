import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import s from './styles';

const CustomeError = (props: {
  error: Error;
  resetError: any;
}): ReactElement => {
  return (
    <View style={s.container}>
      <Text style={s.text}>{props.error.message}</Text>
    </View>
  );
};

export default CustomeError;

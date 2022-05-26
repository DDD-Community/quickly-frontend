import React from 'react';
import { Text, View } from 'react-native';
import s from './styles';

const CustomeError: any = (props: { error: Error; resetError: any }) => {
  return (
    <View style={s.container}>
      <Text style={s.text}>{props.error.message}</Text>
    </View>
  );
};

export default CustomeError;

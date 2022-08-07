import React, { ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import s from './styles';

const Indicator = (): ReactElement => {
  return (
    <View style={s.container}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

export default Indicator;

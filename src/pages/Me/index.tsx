import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TextColor } from '~/styles/foundation-color';
import s from './styles';

const Me: FC = ({}) => {
  return (
    <SafeAreaView style={s.container}>
      <Text style={{ color: TextColor['50'] }}>ME</Text>
    </SafeAreaView>
  );
};

export default Me;

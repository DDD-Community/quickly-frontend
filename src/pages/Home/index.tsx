import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import s from './styles';

const Home: FC = ({}) => {
  return (
    <SafeAreaView style={s.container}>
      <Text>HOME</Text>
    </SafeAreaView>
  );
};

export default Home;

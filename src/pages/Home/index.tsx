import React, { FC, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { fetch } from '~/utils/http';
import s from './styles';
const Home: FC = ({}) => {
  const getData = () =>
    fetch('people/1/', {
      body: '',
      method: 'GET',
    });

  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={s.container}>
      <Text>HOME</Text>
    </SafeAreaView>
  );
};

export default Home;

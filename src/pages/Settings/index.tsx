import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import s from './styles';

const Settings: FC = ({}) => {
  return (
    <SafeAreaView style={s.container}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;

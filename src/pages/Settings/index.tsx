import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TextColor } from '@components/lds/foundation-color';
import s from './styles';

const Settings: FC = ({}) => {
  return (
    <SafeAreaView style={s.container}>
      <Text style={{ color: TextColor['50'] }}>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;

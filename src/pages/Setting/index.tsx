import React, { ReactElement } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TextColor } from '@components/lds/foundation-color';
import s from './styles';
import { SettingScreenNavigationProp } from '~/types/navigation';

const Setting = ({
  navigation,
  route,
}: SettingScreenNavigationProp): ReactElement => {
  return (
    <SafeAreaView style={s.container}>
      <Text style={{ color: TextColor['50'] }}>Settings</Text>
    </SafeAreaView>
  );
};

export default Setting;

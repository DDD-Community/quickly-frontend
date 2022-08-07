import React, { ReactElement } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TextColor } from '~/styles/foundation-color';
import { MyPageScreenNavigationProp } from '~/types/navigation';
import s from './styles';

const Me = ({
  navigation,
  route,
}: MyPageScreenNavigationProp): ReactElement => {
  return (
    <SafeAreaView style={s.container}>
      <Text style={{ color: TextColor['50'] }}>ME</Text>
    </SafeAreaView>
  );
};

export default Me;

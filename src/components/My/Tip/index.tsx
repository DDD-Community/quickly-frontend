import { HStack } from 'native-base';
import React, { ReactElement } from 'react';
import { Text } from 'react-native';
import s from './styles';

const Tip = (): ReactElement => {
  return (
    <HStack style={s.container}>
      <Text>Tip</Text>
    </HStack>
  );
};

export default Tip;

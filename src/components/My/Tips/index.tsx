import { HStack } from 'native-base';
import React, { ReactElement } from 'react';
import { Text } from 'react-native';
import s from './styles';

const Tips = (): ReactElement => {
  return (
    <HStack style={s.container}>
      <Text>Tip</Text>
    </HStack>
  );
};

export default Tips;

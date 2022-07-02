import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import s from './styles';
import * as t from './types';

import Icon from 'react-native-vector-icons/AntDesign';

const CustomHeader = ({ title }: t.HeaderProps) => {
  return (
    <SafeAreaView style={s.container}>
      <Icon style={s.left} name="left" size={20} color="#000" />
      <Text style={s.title}>{title}</Text>
      <Icon style={s.right} name="setting" size={20} color="#000" />
    </SafeAreaView>
  );
};

export default CustomHeader;

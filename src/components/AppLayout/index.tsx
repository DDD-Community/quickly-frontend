import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import s from './styles';
import * as t from './types';

const AppLayout = ({ children }: t.AppLayoutProps) => {
  return <SafeAreaView style={{ ...s.container }}>{children}</SafeAreaView>;
};

export default AppLayout;

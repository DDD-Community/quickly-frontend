import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import s from './styles';
import * as t from './types';

const AppLayout = ({ children, styles }: t.AppLayoutProps): ReactElement => {
  return <SafeAreaView style={[s.container, styles]}>{children}</SafeAreaView>;
};

export default AppLayout;

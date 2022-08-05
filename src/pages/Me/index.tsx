import { Box } from 'native-base';
import React, { ReactElement } from 'react';
import AppLayout from '~/components/AppLayout';
import { MyPageScreenNavigationProp } from '~/types/navigation';
import s from './styles';
import { Dimensions } from 'react-native';
import CustomeTabView from '~/components/TabView';

const FirstRoute = () => (
  <Box style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <Box style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = {
  first: FirstRoute,
  second: SecondRoute,
};

const Me = ({
  navigation,
  route,
}: MyPageScreenNavigationProp): ReactElement => {
  const routes = [
    { key: 'first', title: '마이세탁' },
    { key: 'second', title: '마이꿀팁' },
  ];
  return (
    <AppLayout styles={s.container}>
      <Box
        position={'absolute'}
        bottom={0}
        left={0}
        rounded={'2xl'}
        height={'80%'}
        width={Dimensions.get('window').width}
        backgroundColor="white"
      >
        <CustomeTabView
          initialIndex={0}
          scenes={renderScene}
          tabViews={routes}
        />
      </Box>
    </AppLayout>
  );
};

export default Me;

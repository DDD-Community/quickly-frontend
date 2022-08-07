import { Box, Center } from 'native-base';
import React, { ReactElement } from 'react';
import AppLayout from '~/components/AppLayout';
import { MyPageScreenNavigationProp } from '~/types/navigation';
import s from './styles';
import { Dimensions, StatusBar } from 'react-native';
import CustomeTabView from '~/components/TabView';
import MyLaundry from '~/components/My/Laundry';
import MyTip from '~/components/My/Tip';
import { Subhead1 } from '~/components/lds/typography';
import GradientWrapper from '~/components/GradientWrapper';

const renderScene = {
  first: () => <MyLaundry />,
  second: () => <MyTip />,
};

const My = ({
  navigation,
  route,
}: MyPageScreenNavigationProp): ReactElement => {
  const routes = [
    { key: 'first', title: '마이세탁', count: 2 },
    { key: 'second', title: '마이꿀팁', count: 3 },
  ];
  return (
    <GradientWrapper
      angle={360}
      colors={[
        'rgba(55, 130, 255, 1) 60%',
        'rgba(105, 178, 255, 1) 100%',
        'rgba(224, 242, 254, 1) 100%',
      ]}
    >
      <StatusBar translucent backgroundColor={'transparent'} />
      <Center flex={1}>
        <Subhead1 style={s.userName}>빨래됴하</Subhead1>
      </Center>
      <Box
        flex={2}
        rounded={'2xl'}
        width={Dimensions.get('window').width}
        backgroundColor="white"
      >
        <CustomeTabView
          initialIndex={0}
          scenes={renderScene}
          tabViews={routes}
        />
      </Box>
    </GradientWrapper>
  );
};

export default My;
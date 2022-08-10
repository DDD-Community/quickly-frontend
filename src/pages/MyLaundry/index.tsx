import { Box, Center } from 'native-base';
import React, { ReactElement } from 'react';
import { MyPageScreenNavigationProp } from '~/types/navigation';
import s from './styles';
import { Dimensions, StatusBar } from 'react-native';
import CustomeTabView from '@components/TabView';
import MyLaundries, { dummyMyLaundries } from '@components/My/Laundries';
import MyTips from '@components/My/Tips';
import { Subhead1 } from '@components/lds/typography';
import GradientWrapper from '@components/GradientWrapper';

const renderScene = {
  first: () => <MyLaundries />,
  second: () => <MyTips />,
};

const MyLaundry = ({
  navigation,
  route,
}: MyPageScreenNavigationProp): ReactElement => {
  const { id } = route?.params;

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
        <Subhead1 style={s.userName}>{dummyMyLaundries[id - 1].title}</Subhead1>
      </Center>
      {/* <Box
        flex={2}
        rounded={'2xl'}
        width={Dimensions.get('window').width}
        backgroundColor="white"
      >

      </Box> */}
    </GradientWrapper>
  );
};

export default MyLaundry;

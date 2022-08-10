import { Center } from 'native-base';
import React, { ReactElement } from 'react';
import { MyPageScreenNavigationProp } from '~/types/navigation';
import s from './styles';
import { StatusBar } from 'react-native';
import { dummyMyLaundries } from '@components/My/Laundries';
import { Subhead1 } from '@components/lds/typography';
import GradientWrapper from '@components/GradientWrapper';

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
    </GradientWrapper>
  );
};

export default MyLaundry;

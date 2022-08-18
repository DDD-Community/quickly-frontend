import React, { ReactElement } from 'react';
import s from './styles';

import LabelMain from '@assets/icon/label-main.svg';
import { Body1, Headline1 } from '@components/lds/typography';
import AppLayout from '@components/AppLayout';
import { BaseButton } from '@components/lds/BaseButton';
import { ScanScreenNavigationProp } from '~/types/navigation';
import { Box, Center, VStack } from 'native-base';

const Scan = ({
  navigation,
  route,
}: ScanScreenNavigationProp): ReactElement => {
  return (
    <AppLayout>
      <VStack marginTop={'16'}>
        <Headline1 style={s.title}>나의 세탁물에 맞게</Headline1>
        <Headline1 style={s.title}>세탁방법을 찾아드릴게요!</Headline1>
        <Body1 style={s.description}>
          세탁물에 붙어있는 라벨을 준비해주세요
        </Body1>
        <Center marginTop={'16'}>
          <LabelMain width={280} height={280} />
        </Center>
      </VStack>
      <Box flex={1} justifyContent={'flex-end'}>
        <BaseButton>
          <Body1 style={s.buttonTitle}>세탁라벨 인식하기</Body1>
        </BaseButton>
      </Box>
    </AppLayout>
  );
};

export default Scan;

import { Caption1, Subhead1 } from '@components/lds/typography';
import { Flex, HStack } from 'native-base';
import { WithLocalSvg } from 'react-native-svg';
import ArrowRight from '@assets/images/common/arrow-right.svg';
import React from 'react';

interface SectionTitleProps {
  title: string;
  action: () => void;
}

export const SectionTitle = ({ title, action }: SectionTitleProps) => {
  return (
    <HStack justifyContent="space-between" alignItems="flex-end" mb="20px">
      <Subhead1>{title}</Subhead1>
      <Flex direction="row" alignItems="center" onTouchStart={action}>
        <Caption1>모두보기</Caption1>
        <WithLocalSvg asset={ArrowRight} />
      </Flex>
    </HStack>
  );
};

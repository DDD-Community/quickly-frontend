import { Box, Image } from 'native-base';
import { Body2 } from '@components/lds/typography';
import React from 'react';
import S from './styles';

interface CategoryBoxProps {
  title: string;
  image: string;
}

export const CategoryBox = ({ title, image }: CategoryBoxProps) => {
  return (
    <Box
      flex={1}
      flexDirection="column"
      justifyContent="space-between"
      style={S.CategoryBoxStyle.layout}
    >
      <Body2 style={{ fontWeight: '600' }}>{title}</Body2>
      <Box alignItems="flex-end">
        <Image source={{ uri: image }} alt="이미지" />
      </Box>
    </Box>
  );
};

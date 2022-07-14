import { Box, Center } from 'native-base';
import { Body2 } from '@components/lds/typography';
import React, { ReactNode } from 'react';
import Bookmark from '@assets/images/common/bookmark.svg';
import { WithLocalSvg } from 'react-native-svg';

interface TipCardProps {
  title: ReactNode;
  tagName: string;
}

export const TipCard = ({ title, tagName }: TipCardProps) => {
  return (
    <Box padding="8px">
      <Box mb="8px">
        <Box
          w="128px"
          h="128px"
          style={{ backgroundColor: 'gray', borderRadius: 12 }}
        />
        <Center
          position="absolute"
          top="8px"
          left="8px"
          style={{
            width: 37,
            borderRadius: 4,
            borderStyle: 'solid',
            borderColor: 'white',
            borderWidth: 1,
          }}
        >
          {tagName}
        </Center>
        <Center position="absolute" bottom="8px" right="8px">
          <WithLocalSvg asset={Bookmark} />
        </Center>
      </Box>

      <Body2>{title}</Body2>
    </Box>
  );
};

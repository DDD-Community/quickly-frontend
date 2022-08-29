import { Icon, Input } from 'native-base';
import React from 'react';
import { WithLocalSvg } from 'react-native-svg';
import Search from '@assets/images/common/search.svg';

export const SearchBar = () => {
  return (
    <Input
      placeholder="세탁물을 검색해보세요"
      leftElement={<Icon as={<WithLocalSvg asset={Search} />} ml={3} />}
      h="48px"
      style={{ backgroundColor: 'white' }}
    />
  );
};

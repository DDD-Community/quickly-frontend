import * as React from 'react';
import { Navigation } from '~/types/navigation';
import Icon from 'react-native-vector-icons/AntDesign';

export type buildHeaderProps = {
  [key: string]: {
    title: string;
    left: (arg: Navigation) => React.ReactNode | null;
    right: (arg: Navigation) => React.ReactNode | null;
  };
};

const buildHeader: buildHeaderProps = {
  Home: {
    title: '홈',
    left: () => null,
    right: navigation => (
      <Icon
        name="setting"
        size={20}
        color="#000"
        onPress={() => navigation.navigate('Setting')}
      />
    ),
  },
  Scan: {
    title: '',
    left: () => null,
    right: navigation => (
      <Icon
        name="close"
        size={24}
        color="#000"
        onPress={() => navigation.navigate('Home')}
      />
    ),
  },
  My: {
    title: '마이페이지',
    left: () => null,
    right: navigation => (
      <Icon
        name="setting"
        size={20}
        color="#000"
        onPress={() => navigation.navigate('Setting')}
      />
    ),
  },
  MyLaundry: {
    title: '내 세탁',
    left: navigation => (
      <Icon
        name="left"
        size={20}
        color="#000"
        onPress={() => navigation.goBack()}
      />
    ),
    right: navigation => (
      <Icon
        name="setting"
        size={20}
        color="#000"
        onPress={() => navigation.navigate('Setting')}
      />
    ),
  },
  Setting: {
    title: '설정',
    left: navigation => (
      <Icon
        name="left"
        size={20}
        color="#000"
        onPress={() => navigation.goBack()}
      />
    ),
    right: () => null,
  },
};

export default buildHeader;

import * as React from 'react';
import Home from '@pages/Home';
import Me from '@pages/Me';
import Setting from '@pages/Setting';

import { MypageStack, HomeStack, Navigation, Route } from '~/types/navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import { Subhead1 } from '~/components/lds/typography';

type buildHeaderProps = {
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
  Me: {
    title: '내 정보',
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

const extendHeaderOptions = ({
  navigation,
  route,
}: {
  navigation: any;
  route: Route;
}) => {
  const routeName = route.name;
  const { left, right, title } = buildHeader[routeName];

  return {
    headerTitle: (): React.ReactNode => <Subhead1>{title}</Subhead1>,
    headerLeft: (): React.ReactNode | null => left(navigation),
    headerRight: (): React.ReactNode | null => right(navigation),
  };
};

export const HomeScreens = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Group>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={({ navigation, route }) => ({
            ...extendHeaderOptions({
              navigation,
              route,
            }),
          })}
        />
        <HomeStack.Screen
          name="Setting"
          component={Setting}
          options={({ navigation, route }) => ({
            ...extendHeaderOptions({
              navigation,
              route,
            }),
          })}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export const MeScreens = () => {
  return (
    <MypageStack.Navigator initialRouteName="Me">
      <MypageStack.Group>
        <MypageStack.Screen
          name="Me"
          component={Me}
          options={({ navigation, route }) => ({
            ...extendHeaderOptions({ navigation, route }),
          })}
        />
        <MypageStack.Screen
          name="Setting"
          component={Setting}
          options={({ navigation, route }) => ({
            ...extendHeaderOptions({ navigation, route }),
          })}
        />
      </MypageStack.Group>
    </MypageStack.Navigator>
  );
};

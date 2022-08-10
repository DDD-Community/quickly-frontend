import * as React from 'react';
import Home from '@pages/Home';
import Scan from '@pages/Scan';
import My from '@pages/My';
import Setting from '@pages/Setting';
import MyLaundry from '@pages/MyLaundry';

import { MypageStack, HomeStack, ScanStack, Route } from '~/types/navigation';
import { Subhead1 } from '@components/lds/typography';
import buildHeader from '@utils/buildHeader';

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

export const ScanScreens = () => {
  return (
    <ScanStack.Navigator initialRouteName="Scan">
      <ScanStack.Group>
        <ScanStack.Screen
          name="Scan"
          component={Scan}
          options={({ navigation, route }) => ({
            ...extendHeaderOptions({
              navigation,
              route,
            }),
            headerTransparent: true,
          })}
        />
        <ScanStack.Screen
          name="Setting"
          component={Setting}
          options={({ navigation, route }) => ({
            ...extendHeaderOptions({
              navigation,
              route,
            }),
          })}
        />
      </ScanStack.Group>
    </ScanStack.Navigator>
  );
};

export const MyScreens = () => {
  return (
    <MypageStack.Navigator initialRouteName="My">
      <MypageStack.Group>
        <MypageStack.Screen
          name="My"
          component={My}
          options={({ navigation, route }) => ({
            ...extendHeaderOptions({ navigation, route }),
            headerTransparent: true,
          })}
        />
        <MypageStack.Screen
          name="MyLaundry"
          component={MyLaundry}
          options={({ navigation, route }) => ({
            ...extendHeaderOptions({ navigation, route }),
            headerTransparent: true,
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

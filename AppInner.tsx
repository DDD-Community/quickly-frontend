import * as React from 'react';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';

import { BottomTab, RootStack } from '~/types/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducer';
import { HomeScreens, ScanScreens, MyScreens } from './AppNavigation';
import BottomTabBar from '@components/BottomTabBar';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  return isLoggedIn ? (
    <BottomTab.Navigator
      tabBar={(props: BottomTabBarProps) => (
        <BottomTabBar
          state={props.state}
          descriptors={props.descriptors}
          navigation={props.navigation}
          insets={props.insets}
        />
      )}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name="Scan"
        component={ScanScreens}
        options={{
          headerShown: false,
          tabBarLabel: 'Scan',
          tabBarButton: () => null,
        }}
      />
      <BottomTab.Screen
        name="My"
        component={MyScreens}
        options={{ headerShown: false, tabBarLabel: 'My' }}
      />
    </BottomTab.Navigator>
  ) : (
    <RootStack.Navigator>
      <RootStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: '로그인',
        }}
      />
      <RootStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: '회원가입' }}
      />
    </RootStack.Navigator>
  );
}

export default AppInner;

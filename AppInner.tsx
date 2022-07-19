import * as React from 'react';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';

import { BottomTab, RootStack } from '~/types/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducer';
import { HomeScreens, MeScreens } from './AppNavigation';
import BottomTabBar from '@components/BottomTabBar';

function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  return isLoggedIn ? (
    <BottomTab.Navigator
      tabBar={props => (
        <BottomTabBar
          state={props.state}
          descriptors={props.descriptors}
          navigation={props.navigation}
        />
      )}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Me"
        component={MeScreens}
        options={{ headerShown: false }}
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

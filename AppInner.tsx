import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import Settings from '@pages/Settings';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducer';
import { Home } from '@pages/Home';

export type LoggedInParamList = {
  Home: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator<LoggedInParamList>();
const Stack = createNativeStackNavigator();

function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  return isLoggedIn ? (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ title: '홈' }} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ title: '내 정보' }}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: '로그인' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: '회원가입' }}
      />
    </Stack.Navigator>
  );
}

export default AppInner;

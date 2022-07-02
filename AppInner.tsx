import * as React from 'react';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import Home from '@pages/Home';
import Settings from '@pages/Settings';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducer';
import CustomHeader from '@components/Header';
import { getHeaderTitle } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/AntDesign';

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

export const HomeScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: props => {
              const title = getHeaderTitle(props.options, props.route.name);
              return (
                <CustomHeader
                  {...props}
                  title="홈"
                  leftComponent={
                    <Icon style={s.left} name="left" size={20} color="#000" />
                  }
                />
              );
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  return isLoggedIn ? (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          headerShown: false,
        }}
      />
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
        options={{
          title: 'ㅇ',
        }}
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

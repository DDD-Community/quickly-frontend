import { CompositeNavigationProp } from '@react-navigation/native';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type TabParamList = {
  Home: HomeStackParamList;
  Me: MypageStackParamList;
};

export type HomeStackParamList = {
  Home: undefined;
  Setting: undefined;
};

export type MypageStackParamList = {
  Me: undefined;
  Setting: undefined;
};

export type SignInScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'SignIn'
>;

export type SignUpScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'SignUp'
>;

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'Home'
>;

export type MyPageScreenNavigationProp = NativeStackScreenProps<
  MypageStackParamList,
  'Me'
>;

export type Navigation = HomeScreenNavigationProp['navigation'] &
  MyPageScreenNavigationProp['navigation'];

export type Route = NativeStackScreenProps<
  HomeScreenNavigationProp & MyPageScreenNavigationProp
>['route'];

export type HomeTabScreensProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Home'>,
  NativeStackNavigationProp<HomeStackParamList, 'Home'>
>;

export type MypageTabScreensProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Me'>,
  NativeStackNavigationProp<MypageStackParamList, 'Me'>
>;

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const BottomTab = createBottomTabNavigator<TabParamList>();
export const HomeStack = createNativeStackNavigator<HomeStackParamList>();
export const MypageStack = createNativeStackNavigator<MypageStackParamList>();

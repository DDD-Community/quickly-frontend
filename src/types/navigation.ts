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
  Scan: HomeStackParamList;
  Me: MypageStackParamList;
};

export type SettingStackParamList = {
  Setting: undefined;
};

export type HomeStackParamList = SettingStackParamList & {
  Home: undefined;
};

export type ScanStackParamList = SettingStackParamList & {
  Scan: undefined;
};

export type MypageStackParamList = SettingStackParamList & {
  Me: undefined;
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

export type ScanScreenNavigationProp = NativeStackScreenProps<
  ScanStackParamList,
  'Scan'
>;

export type MyPageScreenNavigationProp = NativeStackScreenProps<
  MypageStackParamList,
  'Me'
>;
export type SettingScreenNavigationProp = NativeStackScreenProps<
  SettingStackParamList,
  'Setting'
>;

export type Navigation = SettingScreenNavigationProp['navigation'] &
  HomeScreenNavigationProp['navigation'] &
  ScanScreenNavigationProp['navigation'] &
  MyPageScreenNavigationProp['navigation'];

export type Route = NativeStackScreenProps<
  SettingScreenNavigationProp &
    HomeScreenNavigationProp &
    ScanScreenNavigationProp &
    MyPageScreenNavigationProp
>['route'];

export type HomeTabScreensProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Home'>,
  NativeStackNavigationProp<HomeStackParamList, 'Home'>
>;

export type ScanTabScreensProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Scan'>,
  NativeStackNavigationProp<ScanStackParamList, 'Scan'>
>;

export type MypageTabScreensProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Me'>,
  NativeStackNavigationProp<MypageStackParamList, 'Me'>
>;

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const BottomTab = createBottomTabNavigator<TabParamList>();
export const HomeStack = createNativeStackNavigator<HomeStackParamList>();
export const ScanStack = createNativeStackNavigator<ScanStackParamList>();
export const MypageStack = createNativeStackNavigator<MypageStackParamList>();

import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import * as c from '~/styles/foundation-color';

const container: StyleProp<ViewStyle> = {
  flex: 1,
  padding: 20,
  // backgroundColor: c.PrimaryColor['900'],
};

const indicator: StyleProp<ViewStyle> = {
  backgroundColor: c.PrimaryColor['500'],
};

const tabBar: StyleProp<ViewStyle> = {
  backgroundColor: c.SingleToneColor.White,
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  paddingTop: 10,
  paddingBottom: 5,
};

const label: StyleProp<TextStyle> = {
  color: c.CoolGaryColor['900'],
};

export default {
  container,
  indicator,
  tabBar,
  label,
};

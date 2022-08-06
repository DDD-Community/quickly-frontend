import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import * as c from '@styles/foundation-color';

const container: StyleProp<ViewStyle> = {
  // flex: 1,
  // backgroundColor: c.PrimaryColor['900'],
};

const title: StyleProp<TextStyle> = {
  color: c.CoolGaryColor['900'],
  fontWeight: 'bold',
  lineHeight: 20,
};

const tag: StyleProp<TextStyle> = {
  color: c.CoolGaryColor['900'],
  fontWeight: '500',
  letterSpacing: -0.5,
};

const date: StyleProp<TextStyle> = {
  color: c.CoolGaryColor['600'],
  fontWeight: '500',
  lineHeight: 16,
};

export default { container, title, tag, date };

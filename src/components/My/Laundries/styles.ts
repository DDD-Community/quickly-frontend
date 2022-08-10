import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import * as c from '@styles/foundation-color';

const container: StyleProp<ViewStyle> = {};

const title: StyleProp<TextStyle> = {
  color: c.CoolGaryColor['900'],
  fontWeight: 'bold',
  lineHeight: 20,
};

const emptyTitle: StyleProp<TextStyle> = {
  color: c.CoolGaryColor['500'],
  fontWeight: '400',
  lineHeight: 22,
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

export default { container, title, tag, date, emptyTitle };

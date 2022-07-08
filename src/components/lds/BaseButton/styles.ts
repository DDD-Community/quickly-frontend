import { PrimaryColor } from '@components/lds/foundation-color';
import { StyleProp, ViewStyle } from 'react-native';

const base: StyleProp<ViewStyle> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  height: 56,
  marginHorizontal: 16,
  marginVertical: 12,
};

const primary: StyleProp<ViewStyle> = {
  ...base,
  backgroundColor: PrimaryColor['500'],
};

const secondary: StyleProp<ViewStyle> = {
  ...base,
  backgroundColor: PrimaryColor['100'],
};

const rounded: StyleProp<ViewStyle> = {
  ...primary,
  borderRadius: 100,
  width: 77,
  height: 40,
};

const disabled: StyleProp<ViewStyle> = {
  ...primary,
  opacity: 50,
};

export default {
  base,
  primary,
  disabled,
  secondary,
  rounded,
};

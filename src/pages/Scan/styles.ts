import { StyleSheet } from 'react-native';
import * as c from '@styles/foundation-color';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    lineHeight: 34,
    color: c.CoolGaryColor['900'],
    fontWeight: '700',
  },
  description: {
    marginTop: 12,
    color: c.CoolGaryColor['600'],
    fontWeight: '500',
  },
  buttonTitle: {
    fontWeight: 'bold',
  },
});

export default style;

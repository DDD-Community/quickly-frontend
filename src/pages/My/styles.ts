import { StyleSheet } from 'react-native';
import * as c from '@styles/foundation-color';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'rgba(55, 130, 255, 1) 60%',
  },
  userName: {
    fontWeight: '700',
    lineHeight: 24,
    color: c.CoolGaryColor['900'],
  },
});

export default style;

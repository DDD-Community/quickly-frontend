import { StyleSheet } from 'react-native';
import { CoolGaryColor } from '~/styles/foundation-color';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: CoolGaryColor['100'],
    height: 82,
  },
  text: {},
  item: {
    flex: 1,
    // borderWidth: 1,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: 100,
    height: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    position: 'absolute',
    top: -20,
  },
  activeItemIcon: {
    position: 'absolute',
  },
  activeItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;

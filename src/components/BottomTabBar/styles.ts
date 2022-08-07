import { StyleSheet } from 'react-native';

const TAB_HEIGHT = 92;

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: TAB_HEIGHT,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
  },
  innerWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: '15%',
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
});

export default style;

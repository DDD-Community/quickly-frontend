import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 53,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    flexDirection: 'row',
  },

  left: {
    flex: 1,
    height: 53,
    position: 'absolute',
    left: 10,
    top: 53,
  },
  right: {
    flex: 1,
    height: 53,
    position: 'absolute',
    right: 10,
    top: 53,
  },
  title: {
    flex: 1,
    height: 53,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default style;

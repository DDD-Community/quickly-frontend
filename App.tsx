import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';

import { SafeAreaView } from 'react-native';

const AppInner = () => {
  return <SafeAreaView>AppInner</SafeAreaView>;
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import AppInner from './AppInner';
import AsyncBoundary from '~/components/AsyncBoundary';
import Indicator from '~/components/Indicator';
import Error from '~/components/Error';
import { NativeBaseProvider } from 'native-base';

const navigationRef: any = React.createRef();
export const navigate = () => {
  return {
    navigate: (name: any, params: any) => {
      navigationRef.current?.navigate(name, params);
    },
    replace: (name: any, params: any) => {
      navigationRef.current?.replace(name, params);
    },
  };
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AsyncBoundary pendingFallback={<Indicator />} rejectedFallback={Error}>
          <NativeBaseProvider>
            <AppInner />
          </NativeBaseProvider>
        </AsyncBoundary>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

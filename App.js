import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Navigation from "./src/navigations"
import { customTheme } from './src/Theme';

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={customTheme}>
        <Provider store={store}>
          <Navigation />  
        </Provider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

export default App;
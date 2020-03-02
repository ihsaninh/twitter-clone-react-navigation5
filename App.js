import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { Provider as PaperProvider, Colors } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './src/navigations/RootNavigation';

enableScreens();

const barStyle = Platform.OS === 'android' ? 'light-content' : 'dark-content';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar
            animated
            barStyle={barStyle}
            backgroundColor={Colors.blue400}
          />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { Provider as PaperProvider, Colors } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { RootNavigator } from './src/navigations/RootNavigator/RootNavigation';

enableScreens();

const barStyle = Platform.OS === 'android' ? 'light-content' : 'dark-content';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar
          animated
          barStyle={barStyle}
          backgroundColor={Colors.blue400}
        />
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

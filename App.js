import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider, Colors } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/Main';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar
          animated
          barStyle="light-content"
          backgroundColor={Colors.blue400}
        />
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

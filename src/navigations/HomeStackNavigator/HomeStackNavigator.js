import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HeaderFeed } from '../../components/HeaderFeed';
import { FeedScreen, FeedDetails } from '../../screens';

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="FeedScreen">
      <Stack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{ header: props => <HeaderFeed title="Beranda" {...props} /> }}
      />
      <Stack.Screen name="FeedDetails" component={FeedDetails} />
    </Stack.Navigator>
  );
}
export { HomeStackNavigator };

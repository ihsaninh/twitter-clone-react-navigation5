import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FeedScreen } from '../../screens/FeedScreen';
import { HeaderFeed } from '../../components/HeaderFeed';
import { FeedDetails } from '../../screens/FeedDetails';

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ header: props => <HeaderFeed title="Beranda" {...props} /> }}
      />
      <Stack.Screen name="FeedDetails" component={FeedDetails} />
    </Stack.Navigator>
  );
}
export { HomeStackNavigator };

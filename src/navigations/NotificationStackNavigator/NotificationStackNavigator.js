import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NotificationScreen } from '../../screens';
import { HeaderNotification } from '../../components/HeaderNotification';

const Stack = createStackNavigator();

function NotificationStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="NotificationScreen">
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          header: props => (
            <HeaderNotification title="Notifications" {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export { NotificationStackNavigator };

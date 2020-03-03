import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { InboxScreen } from '../../screens/InboxScreen';
import { HeaderNotification } from '../../components/HeaderNotification';

const Stack = createStackNavigator();

function InboxStackNavigator() {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="Feed">
      <Stack.Screen
        name="Messages"
        component={InboxScreen}
        options={{
          header: props => <HeaderNotification title="Messages" {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
export { InboxStackNavigator };

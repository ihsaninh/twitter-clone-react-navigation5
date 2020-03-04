import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { InboxScreen } from '../../screens';
import { HeaderNotification } from '../../components/HeaderNotification';

const Stack = createStackNavigator();

function InboxStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="InboxScreen">
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

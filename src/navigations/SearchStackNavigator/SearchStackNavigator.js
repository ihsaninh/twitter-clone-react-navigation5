import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen } from '../../screens';
import { HeaderSearch } from '../../components/HeaderSearch';

const Stack = createStackNavigator();

function SearchStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SearchScreen">
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          header: props => <HeaderSearch {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
export { SearchStackNavigator };

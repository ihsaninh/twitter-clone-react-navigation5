import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen } from '../../screens/SearchScreen';
import { HeaderSearch } from '../../components/HeaderSearch';

const Stack = createStackNavigator();

function SearchStackNavigator() {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="SearchScreen">
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

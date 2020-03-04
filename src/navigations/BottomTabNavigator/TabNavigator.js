import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native-paper';

import { HomeStackNavigator } from '../HomeStackNavigator/HomeStackNavigator';
import { SearchStackNavigator } from '../SearchStackNavigator/SearchStackNavigator';
import { InboxStackNavigator } from '../InboxStackNavigator/InboxStackNavigator';
import { NotificationStackNavigator } from '../NotificationStackNavigator/NotificationStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const barStyle = {
  backgroundColor: Colors.white,
};

function TabComponent() {
  return (
    <Tab.Navigator
      activeColor={Colors.blue400}
      barStyle={barStyle}
      shifting={false}
      labeled={false}>
      <Tab.Screen
        name="Feed"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Foundation name="home" color={color} size={26} />
            ) : (
              <Feather name="home" color={color} size={24} />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="search" color={color} size={24} />
            ) : (
              <Feather name="search" color={color} size={24} />
            ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStackNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="bell" color={color} size={24} />
            ) : (
              <Feather name="bell" color={color} size={24} />
            ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={InboxStackNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons name="email" color={color} size={25} />
            ) : (
              <Feather name="mail" color={color} size={24} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export { TabComponent };

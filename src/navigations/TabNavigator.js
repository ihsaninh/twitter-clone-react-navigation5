import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native-paper';

import { HomeStackNavigator } from '../navigations/HomeStackNavigator/HomeStackNavigator';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import InboxScreen from '../screens/InboxScreen';

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
        component={SearchScreen}
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
        component={NotificationScreen}
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
        name="Message"
        component={InboxScreen}
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

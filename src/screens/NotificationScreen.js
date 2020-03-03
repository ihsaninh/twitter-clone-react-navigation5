import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB, Colors } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function NotifScreen() {
  return (
    <View style={Styles.container}>
      <Text>Notif Screen</Text>
    </View>
  );
}

function NotifScreenMentions() {
  return (
    <View style={Styles.container}>
      <Text>Notif Screen Mentions</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function NotificationScreen() {
  return (
    <Fragment>
      <FAB
        style={Styles.fab}
        icon="feather"
        color={Colors.white}
        onPress={() => console.log('Pressed')}
      />
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="All" component={NotifScreen} />
        <Tab.Screen name="Mentions" component={NotifScreenMentions} />
      </Tab.Navigator>
    </Fragment>
  );
}

const tabBarOptions = {
  indicatorStyle: { backgroundColor: Colors.blue400 },
  activeTintColor: Colors.blue400,
  inactiveTintColor: Colors.grey400,
  labelStyle: { fontWeight: '700' },
};

export { NotificationScreen };

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    elevation: 1,
    zIndex: 1,
    backgroundColor: Colors.blue300,
  },
});

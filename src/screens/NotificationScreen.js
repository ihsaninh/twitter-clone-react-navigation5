import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NotificationScreen() {
  return (
    <View style={Styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
}

export default NotificationScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

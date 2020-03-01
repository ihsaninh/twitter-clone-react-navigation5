import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function InboxScreen() {
  return (
    <View style={Styles.container}>
      <Text>Inbox Screen</Text>
    </View>
  );
}

export default InboxScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

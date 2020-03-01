import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function FeedScreen(props) {
  return (
    <View style={Styles.container}>
      <Text>Feed Screen</Text>
    </View>
  );
}

export { FeedScreen };

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

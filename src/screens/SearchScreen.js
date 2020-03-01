import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SearchScreen() {
  return (
    <View style={Styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
}

export default SearchScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

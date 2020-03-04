import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function FeedDetails(props) {
  return (
    <View style={Styles.container}>
      <Text>Feed Screen</Text>
      <Button
        onPress={() => props.navigation.navigate('HomeScreen')}
        title="Click"
      />
    </View>
  );
}

export default FeedDetails;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

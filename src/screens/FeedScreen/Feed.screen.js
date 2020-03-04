import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB, Colors } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

function FeedScreen(props) {
  return (
    <View style={Styles.container}>
      <Text>Feed Screen</Text>
      <FAB
        style={Styles.fab}
        icon="feather"
        color={Colors.white}
        onPress={() => console.log('Pressed')}
      />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    elevation: 1,
    backgroundColor: Colors.blue300,
  },
});

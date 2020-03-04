import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { List, Avatar, Colors, FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const InboxScreen = props => {
  return (
    <Fragment>
      <List.Item
        onPress={() => null}
        rippleColor="rgba(0,0,0,0.1)"
        title="Info Commuter Line"
        description="Dapat kami sampaikan silahan di periksa kembali jaringan internetnya serta install ulang u..."
        left={() => (
          <Avatar.Image
            size={55}
            style={Styles.img}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/910331759803240448/L52hNjAx_400x400.jpg',
            }}
          />
        )}
        right={() => <Text style={Styles.time}>12 Feb</Text>}
        titleStyle={Styles.titleStyle}
        descriptionStyle={Styles.descriptionStyle}
        style={Styles.card}
      />
      <FAB
        style={Styles.fab}
        icon="email-plus-outline"
        color={Colors.white}
        onPress={() => console.log('Pressed')}
      />
    </Fragment>
  );
};

export default InboxScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  descriptionStyle: {
    color: Colors.grey500,
  },
  time: {
    fontSize: 14,
    paddingRight: 5,
    color: Colors.grey500,
  },
  img: {
    marginTop: 6,
    backgroundColor: 'transparent',
  },
  card: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.grey200,
    borderTopWidth: 1,
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

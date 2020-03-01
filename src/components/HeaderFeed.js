import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Colors, IconButton } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const HeaderFeed = ({ navigation, title }) => {
  return (
    <View style={Styles.appBarHeader}>
      <View style={Styles.appBarLeft}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image
            size={30}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1218867884056698881/2bCxW484_400x400.jpg',
            }}
            style={Styles.avatarImage}
          />
        </TouchableOpacity>
        <Text style={Styles.appBarTitle}>{title}</Text>
      </View>
      <View>
        <IconButton
          icon={() => <Feather name="star" color={Colors.blue400} size={20} />}
          style={Styles.avatarStar}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

export { HeaderFeed };

const Styles = StyleSheet.create({
  appBarHeader: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    elevation: 0,
    flex: 0,
    flexDirection: 'row',
    height: 55,
    justifyContent: 'space-between',
  },
  appBarLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
  },
  appBarTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  avatarStar: {
    marginLeft: 20,
  },
});

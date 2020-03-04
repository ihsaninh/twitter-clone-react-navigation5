import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Avatar, Colors, IconButton } from 'react-native-paper';

const HeaderFeed = ({ navigation, title }) => {
  return (
    <SafeAreaView>
      <View style={Styles.appBarHeader}>
        <View style={Styles.appBarLeft}>
          <TouchableOpacity
            activeOpacity={0.6}
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
            icon="star-four-points-outline"
            color={Colors.blue300}
            style={Styles.avatarStar}
            onPress={() => console.log('Pressed')}
            animated
          />
        </View>
      </View>
    </SafeAreaView>
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
    paddingBottom: 3,
  },
  avatarImage: {
    backgroundColor: 'transparent',
  },
});

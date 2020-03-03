import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Avatar, Colors, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderSearch = ({ navigation, title }) => {
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
          <TouchableOpacity style={Styles.searchBar} activeOpacity={0.7}>
            <Text style={Styles.searchPlaceholder}>Search Twitter</Text>
          </TouchableOpacity>
        </View>
        <View>
          <IconButton
            icon="settings-outline"
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

export { HeaderSearch };

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
  searchBar: {
    width: 280,
    height: 36,
    marginLeft: 20,
    borderRadius: 20,
    borderColor: Colors.grey300,
    borderWidth: 1,
    backgroundColor: Colors.grey200,
  },
  searchPlaceholder: {
    paddingLeft: 15,
    paddingTop: 7,
    color: Colors.grey600,
    fontSize: 16,
  },
});

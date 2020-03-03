import React from 'react';
import { FAB, Colors, List, Divider } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

const trends = [
  {
    trendingName: '#merapi',
    totalTweets: '10k Tweets',
    action: () => null,
  },
  {
    trendingName: '#KamiTidakTakutVirusCorona',
    totalTweets: '15.1k Tweets',
    action: () => null,
  },
  {
    trendingName: '#BTSWORLDDOMINATION',
    totalTweets: '408k Tweets',
    action: () => null,
  },
  {
    trendingName: '#PanikJanganWaspadaHarus',
    totalTweets: '2,649 Tweets',
    action: () => null,
  },
  {
    trendingName: '#ON4onHot100',
    totalTweets: '269k Tweets',
    action: () => null,
  },
];

const renderLatestTreding = () => {
  return trends.map((item, i) => (
    <>
      <List.Item
        onPress={item.action}
        rippleColor="rgba(0, 0, 0, 0.1)"
        title={item.trendingName}
        titleStyle={Styles.trendTitle}
        description={item.totalTweets}
        left={props => <Text style={Styles.numberTrends}>{i + 1}</Text>}
        right={props => (
          <List.Icon {...props} icon="chevron-down" color={Colors.grey400} />
        )}
      />
      <Divider />
    </>
  ));
};

const renderFab = () => {
  return (
    <FAB
      style={Styles.fab}
      icon="feather"
      color={Colors.white}
      onPress={() => console.log('Pressed')}
    />
  );
};

const renderTitleTrends = () => {
  return (
    <View style={Styles.titleTrends}>
      <Text style={Styles.titleTrendsText}>Indonesia trends</Text>
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={Styles.container}>
      {renderTitleTrends()}
      {renderLatestTreding()}
      {renderFab()}
    </View>
  );
};

export { SearchScreen };

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    elevation: 1,
    backgroundColor: Colors.blue300,
  },
  numberTrends: {
    fontSize: 18,
    paddingRight: 15,
    alignItems: 'center',
    paddingTop: 10,
    color: Colors.grey500,
    paddingLeft: 10,
  },
  trendTitle: {
    fontWeight: 'bold',
  },
  titleTrends: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey100,
    borderTopWidth: 1,
    borderTopColor: Colors.grey100,
  },
  titleTrendsText: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

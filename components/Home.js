import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../assests/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import profile from '../assests/images/Picture1.jpg';
import discoverData from '../assests/data/discoverData';
import Entypo from 'react-native-vector-icons/Entypo';
import activitiesData from '../assests/data/activitiesData';
import {AppStyles, MetricsMod} from '../themes';
import learnMoreData from '../assests/data/learnMoreData';

const Home = ({navigation}) => {
  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 20 : 0},
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocation}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivityItem = ({item}) => {
    function handleClickActivities() {
      if (item.id % 2 === 0) {
        navigation.navigate('Liked');
      } else {
        navigation.navigate('Profile');
      }
    }

    return (
      <TouchableOpacity onPress={handleClickActivities}>
        <View
          style={[
            styles.activityItemWrapper,
            {marginLeft: item.id === '1' ? 30 : 0},
          ]}>
          <Image source={item.image} style={styles.activityItemImage} />
          <Text style={styles.activityItemTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderLearnMoreItem = ({item}) => {
    return (
      <TouchableOpacity>
        <ImageBackground
          source={item.image}
          style={[
            styles.learnMoreItem,
            {marginLeft: item.id === 'learnMore-1' ? 20 : 0},
          ]}
          imageStyle={styles.learnMoreItemImage}>
          <Text style={styles.learnMoreItemTitle}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header*/}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              onPress={() => navigation.openDrawer()}
            />
            <Image
              source={profile}
              style={styles.profileImage}
              blurRadius={8}
            />
          </View>
        </SafeAreaView>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoryWrapper}>
            <Text style={[styles.discoverCategoryText, {color: colors.orange}]}>
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destination</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experience</Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
        </View>
        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
        </View>
        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 33,
  },
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.white,
    color: AppStyles.colorSet.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    //marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    color: AppStyles.colorSet.black,
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: 32,
  },
  discoverCategoryWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 20,
    fontFamily: AppStyles.fontFamily.latoRugular,
    fontSize: 16,
    color: AppStyles.colorSet.greyishI,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: 18,
    color: AppStyles.colorSet.white,
  },
  discoverItemLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  discoverItemLocationText: {
    fontFamily: AppStyles.fontFamily.latoBold,
    marginLeft: 5,
    color: AppStyles.colorSet.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: 24,
    color: AppStyles.colorSet.black,
  },
  activitiesItemsWrapper: {
    marginTop: 10,
  },
  activityItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    marginTop: MetricsMod.nine,
  },
  activityItemTitle: {
    fontFamily: AppStyles.fontFamily.latoRugular,
    color: AppStyles.colorSet.greyishI,
    fontSize: MetricsMod.nine,
    marginTop: MetricsMod.six,
  },
  learnMoreWrapper: {
    marginTop: MetricsMod.twenty,
  },
  learnMoreTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: 24,
    color: AppStyles.colorSet.black,
    marginHorizontal: MetricsMod.twenty,
  },
  learnMoreItemsWrapper: {
    marginVertical: MetricsMod.twenty,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: MetricsMod.twenty,
  },
  learnMoreItemImage: {
    borderRadius: MetricsMod.twenty,
  },
  learnMoreItemTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
    marginHorizontal: MetricsMod.six,
    marginVertical: MetricsMod.twenty,
  },
});
export default Home;

import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppStyles, MetricsMod} from '../themes';
import img from '../assests/images/img.png';
import Entypo from 'react-native-vector-icons/Entypo';
import VectorIconComponents from './VectorIconComponents';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <VectorIconComponents
            name="chevron-back"
            type="Ionicons"
            color={AppStyles.colorSet.white}
            size={24}
            style={{marginHorizontal: MetricsMod.nine}}
          />
        </TouchableOpacity>
        <Image source={img} alt="userImage" style={styles.imgUser} />
        <Text style={styles.usernameText}>John Wicks</Text>
        <View style={styles.locationWrapper}>
          <Entypo
            name="location-pin"
            size={20}
            color={AppStyles.colorSet.white}
          />
          <Text style={styles.countryText}>Berlin</Text>
        </View>
      </View>

      {/*About me*/}
      <View style={styles.aboutmeContainer}>
        <Text style={styles.titleAboutme}>About me</Text>
        <Text style={styles.descriptionAboutme}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Latest sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>

      {/*Location Details*/}
      <View style={styles.userDetailWrapper}>
        <Text style={styles.titleUserLocation}>My Previous Location</Text>
        <Text style={styles.locNameText}>Berlin</Text>
        <Text style={styles.visitLocationText}>Visit Berlin 1 time</Text>
        <Text style={styles.locNameText}>Johannesburg</Text>
        <Text style={styles.visitLocationText}>Visit Johannesburg 1 time</Text>
        <Text style={styles.locNameText}>London</Text>
        <Text style={styles.visitLocationText}>Visit London 1 time</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: AppStyles.colorSet.white,
    flex: 1,
  },
  imageWrapper: {
    height: 250,
    backgroundColor: AppStyles.colorSet.blackXXXXXX,
    justifyContent: 'center',
  },
  imgUser: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 150,
  },
  usernameText: {
    color: AppStyles.colorSet.white,
    marginTop: MetricsMod.nine,
    fontFamily: AppStyles.fontFamily.latoBold,
    alignSelf: 'center',
  },
  locationWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
  countryText: {
    color: AppStyles.colorSet.white,
  },
  aboutmeContainer: {
    marginTop: MetricsMod.twenty,
  },
  titleAboutme: {
    fontFamily: AppStyles.fontFamily.latoBold,
    color: AppStyles.colorSet.black,
    marginHorizontal: MetricsMod.twenty,
    fontSize: AppStyles.fontSet.xmiddle,
  },
  descriptionAboutme: {
    fontFamily: AppStyles.fontFamily.latoRugular,
    marginHorizontal: MetricsMod.twenty,
    marginTop: MetricsMod.nine,
  },
  userDetailWrapper: {
    marginTop: MetricsMod.twenty,
  },
  titleUserLocation: {
    fontFamily: AppStyles.fontFamily.latoBold,
    color: AppStyles.colorSet.black,
    marginHorizontal: MetricsMod.twenty,
    fontSize: AppStyles.fontSet.xmiddle,
  },
  locNameText: {
    fontFamily: AppStyles.fontFamily.latoRugular,
    marginHorizontal: MetricsMod.twenty,
    marginTop: MetricsMod.nine,
  },
  visitLocationText: {
    fontFamily: AppStyles.fontFamily.latoRugular,
    marginHorizontal: MetricsMod.twenty,
  },
});
export default Profile;

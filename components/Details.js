import React, {useState} from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppStyles, MetricsMod} from '../themes';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../assests/colors/colors';

const Details = ({route, navigation}) => {
  const [count, setCount] = useState(0);
  const {item} = route.params;
  const [colorChange, setColorChange] = useState(AppStyles.colorSet.silverII);

  console.log(route.params.item);
  const handleHeartClick = () => {
    if (colorChange === AppStyles.colorSet.silverII) {
      setColorChange(colors.orange);
      setCount(count + 1);
    } else {
      setColorChange(AppStyles.colorSet.silverII);
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageBig}
        style={styles.backgroundImage}
        resizeMode={'stretch'}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Entypo
            name="chevron-thin-left"
            size={20}
            color={AppStyles.colorSet.white}
          />
        </TouchableOpacity>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo
              name={'location-pin'}
              size={20}
              color={AppStyles.colorSet.white}
            />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo
            name="heart"
            size={32}
            color={colorChange}
            //onPress={handleHeartClick}
            onPress={()=>{

              handleHeartClick


            }}
          />
        </View>
        <View style={styles.countWrapper}>
          <Text>{count}</Text>
        </View>

        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}>/5</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DURATION</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.duration}</Text>
              <Text style={styles.infoSubText}> hours</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: AppStyles.WINDOW_HEIGHT * 0.6,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -22,
  },
  backButton: {
    marginLeft: MetricsMod.twenty,
    marginTop: MetricsMod.thirty,
  },
  itemTextContainer: {
    marginBottom: 40,
    marginHorizontal: 20,
  },
  itemTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.title,
    color: AppStyles.colorSet.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.latoBold,
    marginLeft: 10,
  },
  heartWrapper: {
    position: 'absolute',
    width: 64,
    height: 64,
    right: 100,
    top: -30,
    borderRadius: 64,
    backgroundColor: AppStyles.colorSet.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: AppStyles.colorSet.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  countWrapper: {
    position: 'absolute',
    width: 64,
    height: 64,
    right: 20,
    top: -30,
    borderRadius: 64,
    backgroundColor: AppStyles.colorSet.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: AppStyles.colorSet.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: MetricsMod.thirty,
    marginHorizontal: MetricsMod.twenty,
  },
  descriptionTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.middle,
    color: AppStyles.colorSet.black,
  },
  descriptionText: {
    fontFamily: AppStyles.fontFamily.latoRugular,
    marginTop: MetricsMod.twenty,
    fontSize: AppStyles.fontSet.smallI,
    color: AppStyles.colorSet.silverII,
    height: MetricsMod.seventy,
    lineHeight: MetricsMod.eighteen,
  },
  infoWrapper: {
    marginHorizontal: MetricsMod.twenty,
    marginTop: MetricsMod.twenty,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {},
  infoTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.xsmall,
    color: AppStyles.colorSet.silverII,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: MetricsMod.six,
  },
  infoText: {
    fontFamily: AppStyles.fontFamily.latoBold,
    color: colors.orange,
    fontSize: AppStyles.fontSet.middle,
  },
  infoSubText: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.xsmall,
    color: AppStyles.colorSet.silverII,
  },
  buttonWrapper: {
    marginHorizontal: MetricsMod.twenty,
    backgroundColor: colors.orange,
    alignItems: 'center',
    padding: MetricsMod.sixteen,
    marginTop: MetricsMod.thirty,
    borderRadius: MetricsMod.twelve,
  },
  buttonText: {
    fontFamily: AppStyles.fontFamily.latoBold,
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.medium,
  },
});
export default Details;

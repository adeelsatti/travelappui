import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 150,
    height: 150,
    marginTop: MetricsMod.forty,
    alignSelf: 'center',
  },
  firstButton: {
    backgroundColor: AppStyles.colorSet.lightBlueText,
    padding: MetricsMod.twenty,
  },
  secondButton: {
    backgroundColor: AppStyles.colorSet.darkOrange,
    padding: MetricsMod.twenty,
  },
  textDescription: {
    alignSelf: 'center',
  },
});

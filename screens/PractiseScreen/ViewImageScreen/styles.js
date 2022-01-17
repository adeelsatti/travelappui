import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../../themes';

export default StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-between',
    padding: MetricsMod.twenty,
    flexDirection: 'row',
  },
  buttonClose: {
    backgroundColor: AppStyles.colorSet.darkOrange,
    padding: MetricsMod.twenty,
  },
  buttonDelete: {
    backgroundColor: AppStyles.colorSet.purpleBlue,
    padding: MetricsMod.twenty,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});

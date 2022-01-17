import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
  },
  counterButton: {
    marginHorizontal: MetricsMod.thirty,
  },
  buttonText: {
    fontsize: AppStyles.fontSet.largeI,
  },
});

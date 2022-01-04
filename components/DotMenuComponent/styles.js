import {AppStyles, MetricsMod} from '../../themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  menu: {
    marginTop: MetricsMod.twenty,
  },
  optionsContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: MetricsMod.nine,
    width: MetricsMod.hundredThirty,
    borderRadius: MetricsMod.six,
  },
  menuTrigger: {
    marginLeft: MetricsMod.forty,
  },
  menuOption: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
  },
});

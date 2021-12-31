import {StyleSheet} from 'react-native';
import {AppStyles} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  totalUsers: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.medium,
    color: AppStyles.colorSet.grey,
  },
});

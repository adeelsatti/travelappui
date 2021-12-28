import React from 'react';
import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  drawerItemContainer: {
  },
  imageContainer: {
    alignItems: 'center',
    padding: MetricsMod.twenty,
    borderBottomWidth: 0.3,
    borderBottomColor: AppStyles.colorSet.blackXX,
  },
  profileImage: {
    width: MetricsMod.eighty,
    height: MetricsMod.eighty,
    borderRadius: MetricsMod.eighty,
    marginTop: MetricsMod.twenty,

  },
  userTitle: {
    color: AppStyles.colorSet.black,
    marginTop: MetricsMod.nine,
    fontFamily: AppStyles.fontFamily.latoBold,
  },
  logOutContainer: {
    flex: 1,
    marginTop: MetricsMod.thirty,
    borderTopWidth: 0.3,
    borderTopColor: AppStyles.colorSet.blackXX,
  },
  logOutText: {},
});

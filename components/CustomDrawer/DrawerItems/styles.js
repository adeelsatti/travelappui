import React from 'react';
import {StyleSheet} from 'react-native';
import {MetricsMod} from '../../../themes';

export default StyleSheet.create({
  container: {
    marginTop: MetricsMod.thirty,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: MetricsMod.twenty,
  },
  drawerItemTitle: {
    marginLeft: MetricsMod.twenty,
  },
});

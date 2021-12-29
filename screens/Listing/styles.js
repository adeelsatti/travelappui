import React from 'react';
import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.white,
  },
  addTitle: {
    marginTop: MetricsMod.forty,
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.large,
    color: AppStyles.colorSet.blue,
    alignSelf: 'center',
  },
  inputContainer: {
    marginTop: MetricsMod.twenty,
  },
  addInputText: {
    borderRadius: 1,
    padding: MetricsMod.nine,
    borderWidth: 0.1,
    marginHorizontal: MetricsMod.twenty,
    marginTop: MetricsMod.twenty,
  },
  genderText: {
    fontSize: AppStyles.fontSet.normal,
    fontFamily: AppStyles.fontFamily.latoBold,
    color: AppStyles.colorSet.black,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: MetricsMod.twenty,
    paddingHorizontal: MetricsMod.six,
  },
  icon: {
    width: 20,
    height: 20,
  },
  addButton: {
    paddingHorizontal: MetricsMod.twenty,
    paddingVertical: MetricsMod.twenty,
    alignItems: 'center',
    borderRadius: MetricsMod.forty,
    backgroundColor: AppStyles.colorSet.blue,
    marginHorizontal: MetricsMod.twenty,
    marginTop: MetricsMod.thirty,
  },
  buttonText: {
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.latoBold,
  },
});

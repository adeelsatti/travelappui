import React from 'react';
import {AppStyles, MetricsMod} from '../../themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.white,
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: MetricsMod.sixty,
    marginHorizontal: MetricsMod.hundred,
  },
  logoImage: {
    borderRadius: 90,
    backgroundColor: AppStyles.colorSet.black,
  },
  appTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    marginTop: MetricsMod.twelve,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: MetricsMod.twenty,
  },
  usernameInput: {
    borderRadius: 1,
    padding: MetricsMod.nine,
    borderWidth: 0.1,
    width: '80%',
    marginTop: MetricsMod.twelve,
  },
  btnSignup: {
    alignItems: 'center',
    backgroundColor: AppStyles.colorSet.blue,
    marginHorizontal: MetricsMod.forty,
    marginTop: MetricsMod.twenty,
    padding: MetricsMod.twelve,
    borderRadius: 2,
  },
  btnText: {
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.latoBold,
  },
  btnFacebookLogin: {
    backgroundColor: AppStyles.colorSet.facebook,
    marginHorizontal: MetricsMod.forty,
    padding: MetricsMod.twelve,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: MetricsMod.thirty,
    borderRadius: 2,
  },
  fbBtnIcon: {
    marginHorizontal: MetricsMod.twenty,
  },
  btnFbTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    color: AppStyles.colorSet.white,
    marginHorizontal: MetricsMod.eighty,
  },
  forgetContainer: {
    alignItems: 'center',
  },
  forgetPassword: {
    color: AppStyles.colorSet.blue,
    marginTop: MetricsMod.thirty,
  },
  createNewAccountContainer: {
    flexDirection: 'row',
    marginTop: MetricsMod.nine,
  },
  createNewAccount: {
    fontFamily: AppStyles.fontFamily.latoRugular,
  },
  createAnAccount: {
    fontFamily: AppStyles.fontFamily.latoRugular,
    color: AppStyles.colorSet.blue,
  },
});

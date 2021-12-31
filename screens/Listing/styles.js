import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: MetricsMod.thirty,
  },
  listTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.large,
    color: AppStyles.colorSet.black,
    alignSelf: 'center',
  },
  fetchButton: {
    backgroundColor: AppStyles.colorSet.blue,
    marginTop: MetricsMod.twenty,
    paddingHorizontal: MetricsMod.fifty,
    paddingVertical: MetricsMod.twenty,
    marginBottom: MetricsMod.twenty,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: MetricsMod.thirty,
  },
  fetchButtonText: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
  },
  userDataText: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.black,
    marginHorizontal: MetricsMod.twenty,
    marginTop: MetricsMod.twenty,
  },
  userContainer: {
    backgroundColor: AppStyles.colorSet.silver,
    marginTop: MetricsMod.twenty,
    marginHorizontal: MetricsMod.twenty,
    borderRadius: MetricsMod.twenty,
    paddingVertical: MetricsMod.six,
    marginBottom: MetricsMod.six,
  },
  userDeleteModal: {
    justifyContent: 'center',
    borderRadius: MetricsMod.twenty,
    marginHorizontal: MetricsMod.twenty,
    backgroundColor: AppStyles.colorSet.grey,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  deleteButton: {
    alignItems: 'center',
    marginHorizontal: MetricsMod.twenty,
    marginVertical: MetricsMod.six,
    borderRadius: MetricsMod.six,
  },
  modalBtnText: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.normal,
  },
  buttonContainer: {
    marginLeft: MetricsMod.twenty,
  },
  threeDotsMenu: {
    alignSelf: 'flex-end',
    marginRight: MetricsMod.six,
  },
  modalContainer: {
    marginLeft: 120,
    marginBottom: MetricsMod.twoFifty,
  },
  modalContainer1: {
    flex: 1,
  },
});

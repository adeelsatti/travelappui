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
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.twenty,
    marginHorizontal: MetricsMod.twenty,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: AppStyles.colorSet.blue,
    marginHorizontal: MetricsMod.twenty,
    padding: MetricsMod.twelve,
    marginVertical: MetricsMod.six,
    borderRadius: MetricsMod.six,
  },
  modalBtnText: {
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.normal,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: MetricsMod.twenty,
  },
});

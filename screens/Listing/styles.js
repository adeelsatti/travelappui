import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.white,
  },
  listTitle: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.large,
    color: AppStyles.colorSet.black,
    marginTop: MetricsMod.thirty,
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
    flexDirection: 'row',
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
  threeDotsContainer: {
    flex: 1,
  },
  threeDotsButton: {
    width: 100,
    height: 200,
    alignItems: 'center',
  },
  textContainer: {
    width: 270,
  },
  modalContainer: {
    marginLeft: 120,
    marginBottom: MetricsMod.twoFifty,
  },
  modalContainer1: {
    flex: 1,
  },
  PopUp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.colorSet.grey,
  },
  deleteContainer: {
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.nine,
  },
  deleteText: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.normal,
    color: AppStyles.colorSet.white,
  },
  confirmDeleteButton: {
    backgroundColor: AppStyles.colorSet.blue,
    padding: MetricsMod.nine,
    borderRadius: 3,
    marginHorizontal: MetricsMod.nine,
  },
  deleteButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: MetricsMod.twenty,
    paddingVertical: MetricsMod.twenty,
  },
  confirmDelete: {
    fontSize: AppStyles.fontSet.normalI,
    color: AppStyles.colorSet.black,
    paddingHorizontal: MetricsMod.thirty,
    paddingVertical: MetricsMod.twenty,
  },
});

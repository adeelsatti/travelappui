import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppStyles, MetricsMod} from '../themes';
import {ReactNativeModal} from 'react-native-modal';
import VectorIconComponents from './VectorIconComponents';
import {useNavigation} from '@react-navigation/native';

const Liked = () => {
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const [changeText, setChangeText] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const [firstname, ...otherInfo] = data;

  /*  useEffect(() => {
    setLoading(true);
    fetch('http://universities.hipolabs.com/search?country=' + changeText).then(
      response => response.json().then(response => setData(response)),
    );
    setLoading(false);
  }, []);*/

  const fetchUniversity = async () => {
    if (changeText.trim().length) {
      setLoading(true);
      let response = await fetch(
        'http://universities.hipolabs.com/search?country=' + changeText,
      );
      response = await response.json();
      setData(response);
      setLoading(false);
    }
  };

  const onHandleItemClick = ({item}) => {
    setSelectedItem(item);
    setModalOpen(true);
  };
  const renderUser = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onHandleItemClick({item})}>
        <View style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textWrapper}>Country: </Text>
            <Text style={styles.textDescription}> {item?.country ?? ''}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textWrapper}>Name:</Text>
            <Text style={styles.textDescription}>{item?.name}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textWrapper}>Domains: </Text>
            <Text style={styles.textDescription}>{item?.domains}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const lineSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          marginHorizontal: 20,
          borderBottomColor: 'lightgrey',
          marginVertical: 20,
        }}
      />
    );
  };

  const EmptyComponent = () => {
    return (
      <>
        {!loading ? (
          <View style={{alignItems: 'center', marginTop: 200}}>
            <Text style={{fontSize: 40}}>Not Found</Text>
          </View>
        ) : (
          <View style={{alignItems: 'center', marginTop: 200}}>
            <ActivityIndicator size="large" color={AppStyles.colorSet.pink} />
          </View>
        )}
      </>
    );
  };

  const ListFooterLoading = () => {
    return (
      <View>
        {data.length > 0 && (
          <ActivityIndicator size="large" color={AppStyles.colorSet.pink} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <VectorIconComponents
            name="chevron-back"
            type="Ionicons"
            color={AppStyles.colorSet.black}
            size={24}
            style={{marginHorizontal: MetricsMod.nine, marginTop: 4}}
          />
        </TouchableOpacity>
        <Text style={styles.titleWrapper}> University Names</Text>
      </View>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={value => setChangeText(value)}
        />
        <TouchableOpacity onPress={fetchUniversity} style={styles.btnSearch}>
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        //renderItem={({item}) => renderUser(item)}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => lineSeparator()}
        ListEmptyComponent={EmptyComponent}
      />
      <ReactNativeModal
        animationIn="slideInRight"
        animationOut="slideOutLeft"
        animationOutTiming={2000}
        onBackdropPress={() => setModalOpen(false)}
        isVisible={modalOpen}
        hasBackdrop={true}
        coverScreen={true}
        onBackButtonPress={() => setModalOpen(false)}
        backdropColor={'black'}
        avoidKeyboard={false}
        backdropOpacity={0.5}>
        <View style={styles.modalView}>
          <View style={styles.centeredView}>
            <View style={styles.textContainer}>
              <Text style={styles.textWrapper}>Country:</Text>
              <Text style={styles.textDescription}>
                {selectedItem?.country}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textWrapper}>Name:</Text>
              <Text style={styles.textDescription}>{selectedItem?.name}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textWrapper}>Domain:</Text>
              <Text style={styles.textDescription}>
                {selectedItem?.domains}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalOpen(false)}
              style={styles.btnClose}>
              <Text style={styles.btnCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  centeredView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  mainContainer: {
    backgroundColor: 'lightgray',
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
    height: 140,
    justifyContent: 'space-around',
  },
  titleWrapper: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.large,
    color: AppStyles.colorSet.darkBlue,
    marginHorizontal: MetricsMod.fifty,
  },
  textContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
  },
  textWrapper: {
    fontFamily: AppStyles.fontFamily.latoBold,
    fontSize: AppStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
  },
  textDescription: {
    fontFamily: AppStyles.fontFamily.latoRugular,
    fontSize: AppStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
    marginHorizontal: 10,
  },
  searchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: MetricsMod.twenty,
    alignItems: 'center',
  },
  searchInput: {
    width: '70%',
    borderRadius: MetricsMod.nine,
    backgroundColor: AppStyles.colorSet.lightGray,
    paddingLeft: MetricsMod.twelve,
    fontSize: 15,
    fontFamily: AppStyles.colorSet.latoRugular,
    marginVertical: MetricsMod.twenty,
  },
  btnSearch: {
    backgroundColor: AppStyles.colorSet.blue,
    padding: MetricsMod.twelve,
    flex: 1,
    marginLeft: MetricsMod.six,
    borderRadius: MetricsMod.twelve,
    alignItems: 'center',
  },
  btnText: {
    color: AppStyles.colorSet.white,
    fontFamily: AppStyles.fontFamily.latoBold,
  },
  modalView: {
    justifyContent: 'center',
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
  },
  btnClose: {
    borderRadius: 20,
    alignSelf: 'flex-end',
    backgroundColor: AppStyles.colorSet.blue,
    paddingHorizontal: MetricsMod.twenty,
    padding: MetricsMod.six,
  },
  btnCloseText: {
    color: AppStyles.colorSet.white,
  },
  headerText: {
    flexDirection: 'row',
  },
});
export default Liked;

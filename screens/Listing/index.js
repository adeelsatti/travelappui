import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {AppStyles} from '../../themes';
import DotMenuComponent from '../../components/DotMenuComponent';

const Listing = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const arrayUsers = [];

  const FetchUser = async () => {
    setLoading(true);
    const result = await firestore().collection('travel1').get();
    await Promise.all(
      result?.docs.map(async doc => {
        const data = await doc?.data();
        arrayUsers.push({data});
      }),
      setResults(arrayUsers),
      setLoading(false),
    );
  };

  useEffect(() => {
    FetchUser();
  }, []);

  const onAddUser = async () => {
    navigation.navigate('AddUsers');
  };

  const onRenderUsers = ({item}) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.userDataText}>
            First Name : {item.data.FirstName}
          </Text>
          <Text style={styles.userDataText}>
            Last Name : {item.data.LastName}
          </Text>
          <Text style={styles.userDataText}>Age : {item.data.age}</Text>
          <Text style={styles.userDataText}>Email : {item.data.email}</Text>
          <Text style={styles.userDataText}>Gender : {item.data.gender}</Text>
        </View>

        <View style={styles.threeDotsContainer}>
          <TouchableOpacity style={styles.threeDotsButton}>
            <DotMenuComponent />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const emptyComponent = () => {
    return (
      <>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color={AppStyles.colorSet.pink} />
          </View>
        ) : (
          <View>
            <Text>Not Found</Text>
          </View>
        )}
      </>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.listTitle}>Users Details</Text>

      <TouchableOpacity style={styles.fetchButton} onPress={onAddUser}>
        <Text style={styles.fetchButtonText}>Add User</Text>
      </TouchableOpacity>

      <FlatList
        data={results}
        renderItem={onRenderUsers}
        keyExtractor={(item, index) => item?.email || index}
        ListEmptyComponent={emptyComponent}
        //ListFooterComponent={<ListFooterComponent />}
        //ListHeaderComponent={<ListHeaderComponent />}
      />
      <View style={styles.modalContainer1}>
        {/*<ReactNativeModal
            isVisible={modalOpen}
            style={styles.modalContainer}
            hasBackdrop={true}
            coverScreen={true}
            backdropOpacity={0.5}
            backdropColor={'black'}>
            <View style={styles.userDeleteModal}>
              <Text style={styles.userDataText}>
            First Name : {selectedItem?.data.FirstName}
          </Text>
          <Text style={styles.userDataText}>
            Last Name: {selectedItem?.data.LastName}
          </Text>
          <Text style={styles.userDataText}>
            Age : {selectedItem?.data.age}
          </Text>
          <Text style={styles.userDataText}>
            Email: {selectedItem?.data.email}
          </Text>
          <Text style={styles.userDataText}>
            Gender: {selectedItem?.data.gender}
          </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => setModalOpen(false)}>
                  <Text style={styles.modalBtnText}>Delete </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => setModalOpen(false)}>
                  <Text style={styles.modalBtnText}>Update </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ReactNativeModal>*/}
      </View>
    </View>
  );
};

export default Listing;

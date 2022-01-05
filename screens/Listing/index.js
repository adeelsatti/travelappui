import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {ReactNativeModal} from 'react-native-modal';

import styles from './styles';
import DotMenuComponent from '../../components/DotMenuComponent';
import ListFooterComponent from '../../components/ListFooterComponent';
import EmptyComponent from '../../components/EmptyComponent';

const Listing = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pullToRefresh, setPullToRefresh] = useState(false);
  const [modal, setModal] = useState(false);
  const arrayUsers = [];

  const fetchUser = async () => {
    const result = await firestore().collection('travel').get();
    await Promise.all(
      result?.docs.map(async doc => {
        const data = await doc?.data();
        arrayUsers.push({data});
      }),
      setResults(arrayUsers),
    );
    setPullToRefresh(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const onAddUser = async () => {
    navigation.navigate('AddUsers');
  };

  const onRenderUsers = ({item}) => {
    setLoading(false);

    return (
      <View style={styles.userContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.userDataText}>
            First Name : {item?.data?.FirstName}
          </Text>
          <Text style={styles.userDataText}>
            Last Name : {item?.data?.LastName}
          </Text>
          <Text style={styles.userDataText}>Age : {item?.data?.age}</Text>
          <Text style={styles.userDataText}>Email : {item?.data?.email}</Text>
          <Text style={styles.userDataText}>Gender : {item?.data?.gender}</Text>
        </View>

        <View style={styles.threeDotsContainer}>
          <TouchableOpacity style={styles.threeDotsButton}>
            <DotMenuComponent
              item={item}
              setModal={setModal}
              setSelectedItem={setSelectedItem}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onDone = async () => {
    const res = await firestore()
      ?.collection('travel')
      ?.where('email', '==', selectedItem?.data?.email)
      ?.get();

    res.forEach(documentSnapshot => {
      onDeleteUser(documentSnapshot?.id);
    });
  };

  const onDeleteUser = async docID => {
    await firestore()?.collection('travel')?.doc(docID)?.delete();
    setModal(false);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onRefresh = () => {
    setPullToRefresh(true);
    fetchUser();
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
        ListEmptyComponent={<EmptyComponent loading={loading} />}
        ListFooterComponent={<ListFooterComponent />}
        refreshing={pullToRefresh}
        onRefresh={onRefresh}
      />

      <ReactNativeModal
        isVisible={modal}
        coverScreen={true}
        hasBackdrop={true}
        onBackdropPress={() => setModal(false)}>
        <View style={styles.deleteContainer}>
          <Text style={styles.confirmDelete}>
            Are you sure you want to delete this user
          </Text>

          <View style={styles.deleteButtonContainer}>
            <TouchableOpacity
              style={styles.confirmDeleteButton}
              onPress={onDone}>
              <Text style={styles.deleteText}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmDeleteButton}
              onPress={onCancel}>
              <Text style={styles.deleteText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default Listing;

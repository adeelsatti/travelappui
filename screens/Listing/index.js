import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {ReactNativeModal} from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {AppStyles} from '../../themes';
import VectorIconComponents from '../../components/VectorIconComponents';

const Listing = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [loading, setLoading] = useState(false);
  const arrayUsers = [];

  const FetchUser = async () => {
    setLoading(true);
    const result = await firestore().collection('travel1').get();
    await Promise.all(
      result?.docs.map(async doc => {
        const data = await doc?.data();
        //console.log(typeof data);
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

  const onModalOpen = ({item}) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const onDeleteUser = async () => {
    await firestore()
      .collection('travel1')
      .doc('1DRU4a806br0Jcfnl2i4')
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
    setModalOpen(false);
  };

  const onRenderUsers = ({item}) => {
    return (
      <View style={styles.userContainer}>
        <TouchableOpacity
          style={styles.threeDotsMenu}
          onPress={() => onModalOpen({item})}>
          <VectorIconComponents
            type="Entypo"
            name="dots-three-vertical"
            size={24}
            color={AppStyles.colorSet.grey}
          />
        </TouchableOpacity>

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
    );
  };

  const emptyComponent = () => {
    return (
      <>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color={AppStyles.colorSet.pink} />
          </View>
        ) : null}
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
        keyExtractor={item => item.email}
        ListEmptyComponent={emptyComponent}
      />
      <View style={styles.modalContainer1}>
        <ReactNativeModal
          isVisible={modalOpen}
          style={styles.modalContainer}
          hasBackdrop={true}
          coverScreen={true}
          backdropOpacity={0.5}
          backdropColor={'black'}>
          <View style={styles.userDeleteModal}>
            {/*<Text style={styles.userDataText}>
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
*/}
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
        </ReactNativeModal>
      </View>
    </View>
  );
};

export default Listing;

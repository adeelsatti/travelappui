import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {ReactNativeModal} from 'react-native-modal';

const Listing = () => {
  const [results, setResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const arrayUsers = [];

  const onFetchUsers = async () => {
    const result = await firestore().collection('travel1').get();
    await Promise.all(
      result?.docs.map(async doc => {
        const data = await doc?.data();
        //console.log(typeof data);
        arrayUsers.push({data});
      }),
    );
    setResults(arrayUsers);
    console.log('results', arrayUsers[1]?.data?.Fastname);

    //console.log('Data', result?.docs[0]?.data());
  };

  const onModalOpen = ({item}) => {
    setSelectedItem(item);
    setModalOpen(true);
  };
  const onRenderUsers = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.userContainer}
        onPress={() => onModalOpen({item})}>
        <Text style={styles.userDataText}>
          First Name : {item.data.Fastname}
        </Text>
        <Text style={styles.userDataText}>Last Name: {item.data.Lastname}</Text>
        <Text style={styles.userDataText}>Age: {item.data.age}</Text>
        <Text style={styles.userDataText}>Email: {item.data.email}</Text>
        <Text style={styles.userDataText}>Gender: {item.data.gender}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.listTitle}>Users Details</Text>
      <TouchableOpacity style={styles.fetchButton} onPress={onFetchUsers}>
        <Text style={styles.fetchButtonText}>Fetch List</Text>
      </TouchableOpacity>
      <FlatList
        data={results}
        renderItem={onRenderUsers}
        keyExtractor={item => item.email}
      />

      <ReactNativeModal
        animationIn="slideInRight"
        animationOut="slideOutLeft"
        animationOutTiming={2000}
        isVisible={modalOpen}
        hasBackdrop={true}
        coverScreen={true}
        onBackButtonPress={() => setModalOpen(false)}
        backdropColor={'black'}
        backdropOpacity={0.5}>
        <View style={styles.userDeleteModal}>
          <Text style={styles.userDataText}>
            First Name : {selectedItem?.data.Fastname}
          </Text>
          <Text style={styles.userDataText}>
            Last Name: {selectedItem?.data.Lastname}
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
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => setModalOpen(false)}>
            <Text style={styles.modalBtnText}>Delete </Text>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default Listing;

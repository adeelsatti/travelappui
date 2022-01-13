import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {ReactNativeModal} from 'react-native-modal';
import {connect} from 'react-redux';

import styles from './styles';
import DotMenuComponent from '../../components/DotMenuComponent';
import ListFooterComponent from '../../components/ListFooterComponent';
import EmptyComponent from '../../components/EmptyComponent';
import * as Actions from '../../constants';

const Listing = props => {
  console.log('log', props);
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pullToRefresh, setPullToRefresh] = useState(false);
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(0);
  const [startAfter, setStartAfter] = useState(null);
  const [endReach, setEndReach] = useState(false);
  const pageSize = 2;
  let lastVisible = 0;

  const arrayUsers = [];

  /*const fetchUser = async () => {
    if (endReach) {
      return;
    }
    const response = await firestore().collection('travel').orderBy('email');
    const query = response.limit(pageSize);
    const res = await (results.length < pageSize
      ? query.get()
      : response.startAfter(startAfter).limit(pageSize).get());
    lastVisible = res?.docs[res?.docs?.length - 1];
    const size = res?.size;
    setCount(count + size);
    res.forEach(doc => {
      const ids = {Id: doc?.id};
      const data = doc?.data();
      const res = {...ids, ...data};
      arrayUsers.push({res});
    });
    setStartAfter(lastVisible);
    setResults([...results, ...arrayUsers]);
    setPullToRefresh(false);
    setEndReach(!arrayUsers.length);
  };
*/
  /* const onEndReached = () => {
    fetchUser();
    setPullToRefresh(false);
  };*/

  /*useEffect(() => {
    fetchUser();
  }, [pullToRefresh]);*/

  const onAddUser = async () => {
    navigation.navigate('AddUsers');
  };

  /*const onRenderUsers = () => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.userDataText}>
            First Name : {props?.users?.firstName}
          </Text>
          <Text style={styles.userDataText}>
            Last Name : {props?.users?.firstName}
          </Text>
          <Text style={styles.userDataText}>
            Age : {props?.users?.firstName}
          </Text>
          <Text style={styles.userDataText}>
            Email : {props?.users?.firstName}
          </Text>
          <Text style={styles.userDataText}>
            Gender : {props?.users?.firstName}
          </Text>
        </View>

        <View style={styles.threeDotsContainer}>
          <TouchableOpacity style={styles.threeDotsButton}>
            <DotMenuComponent
              item={props?.users}
              setModal={setModal}
              setSelectedItem={setSelectedItem}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };*/

  const onDone = async () => {
    /* const result = results.filter(x => x !== selectedItem);
    setResults(result);
    setCount(count - 1);*/
    props?.delete;
    setModal(false);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onRefresh = () => {
    setPullToRefresh(true);
    setResults([]);
    setCount(0);
    setEndReach(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.listTitle}>Users Details</Text>
      <TouchableOpacity style={styles.fetchButton} onPress={onAddUser}>
        <Text style={styles.fetchButtonText}>Add User</Text>
      </TouchableOpacity>

      <View style={styles.userContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.userDataText}>User ID: {props?.users?.id}</Text>
          <Text style={styles.userDataText}>
            First Name : {props?.users?.firstName}
          </Text>
          <Text style={styles.userDataText}>
            Last Name : {props?.users?.lastName}
          </Text>
          <Text style={styles.userDataText}>Age : {props?.users?.age}</Text>
          <Text style={styles.userDataText}>Email : {props?.users?.email}</Text>
          <Text style={styles.userDataText}>
            Gender : {props?.users?.gender}
          </Text>
        </View>
        <View style={styles.threeDotsContainer}>
          <TouchableOpacity style={styles.threeDotsButton}>
            <DotMenuComponent
              item={props?.users}
              setModal={setModal}
              setSelectedItem={setSelectedItem}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/*<FlatList
        data={props?.users}
        renderItem={onRenderUsers}
        keyExtractor={(item, index) => item?.email || index}
      ListEmptyComponent=
      {!pullToRefresh && <EmptyComponent loading={loading} />}
      ListFooterComponent=
      {!pullToRefresh && (
        <ListFooterComponent
          count={count}
          endReach={endReach}
          loading={loading}
        />
      )}
      refreshing={pullToRefresh}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      />*/}
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

const mapStateToProps = state => ({
  users: state?.users,
});

const mapDispatchToProps = dispatch => ({
  deleteUser: id => dispatch({type: Actions.DELETE_USER, id}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Listing);

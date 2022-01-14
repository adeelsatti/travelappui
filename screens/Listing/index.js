import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ReactNativeModal} from 'react-native-modal';
import {connect} from 'react-redux';

import styles from './styles';
import DotMenuComponent from '../../components/DotMenuComponent';
import * as Actions from '../../constants';
import EmptyComponent from '../../components/EmptyComponent';

const Listing = props => {
  const navigation = useNavigation();

  const [selectedItem, setSelectedItem] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const onAddUser = async () => {
    navigation.navigate('AddUsers');
  };

  const onRenderUsers = ({item}) => {
    setLoading(false);
    return (
      <View style={styles.userContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.userDataText}>User ID : {item?.id}</Text>
          <Text style={styles.userDataText}>First Name:{item?.firstName}</Text>
          <Text style={styles.userDataText}>Last Name : {item?.lastName}</Text>
          <Text style={styles.userDataText}>Age : {item?.age}</Text>
          <Text style={styles.userDataText}>Email : {item?.email}</Text>
          <Text style={styles.userDataText}>Gender : {item?.gender}</Text>
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
    console.log(selectedItem?.id);
    props?.deleteUser(selectedItem?.id);
    setModal(false);
  };

  const onCancel = () => {
    setModal(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.listTitle}>Users Details</Text>
      <TouchableOpacity style={styles.fetchButton} onPress={onAddUser}>
        <Text style={styles.fetchButtonText}>Add User</Text>
      </TouchableOpacity>

      <FlatList
        data={props?.users}
        renderItem={onRenderUsers}
        keyExtractor={(item, index) => item?.email || index}
        ListEmptyComponent={<EmptyComponent loading={loading} />}
        /*ListFooterComponent={
          !pullToRefresh && (
            <ListFooterComponent
              count={count}
              endReach={endReach}
              loading={loading}
            />
          )
        }*/
        //refreshing={pullToRefresh}
        //onRefresh={onRefresh}
        //onEndReached={onEndReached}
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

const mapStateToProps = state => ({
  users: state?.users,
});

const mapDispatchToProps = dispatch => ({
  deleteUser: id => dispatch({type: Actions.DELETE_USER, id}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Listing);

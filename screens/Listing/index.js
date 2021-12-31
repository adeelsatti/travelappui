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
import ListFooterComponent from '../../components/ListFooterComponent';

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
        ListFooterComponent={<ListFooterComponent />}
        //ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default Listing;

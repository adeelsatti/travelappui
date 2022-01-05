import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import firestore from '@react-native-firebase/firestore';

const ListFooterComponent = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    firestore()
      .collection('travel')
      .get()
      .then(querySnapshot => {
        setCounter(querySnapshot.size);
      });
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.totalUsers}>Total User: {counter}</Text>
    </View>
  );
};

export default ListFooterComponent;

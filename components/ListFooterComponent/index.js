import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {ActivityIndicator} from 'react-native-paper';

const ListFooterComponent = ({count, endReach, loading}) => {
  return (
    <View style={styles.mainContainer}>
      {!endReach && !loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.totalUsers}>Total User: {count}</Text>
      )}
    </View>
  );
};

export default ListFooterComponent;

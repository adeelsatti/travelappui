import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {ActivityIndicator} from 'react-native-paper';

const ListFooterComponent = ({count, endReach, loading}) => {
  if (!endReach && !loading) {
    return <ActivityIndicator />;
  }
  if (endReach || loading) {
    return <Text style={styles.totalUsers}>Total User: {count}</Text>;
  }
};

export default ListFooterComponent;

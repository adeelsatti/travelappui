import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const ListFooterComponent = ({count}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.totalUsers}>Total User: {count}</Text>
    </View>
  );
};

export default ListFooterComponent;

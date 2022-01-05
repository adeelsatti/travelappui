import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {AppStyles} from '../../themes';

import styles from './styles';

import notFound from '../../assests/images/nodatafound.png';

const EmptyComponent = ({loading}) => {
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color={AppStyles.colorSet.pink} />
      </View>
    );
  }

  return (
    <View style={styles.imageContainer}>
      <Image source={notFound} style={styles.notFoundImage} />
    </View>
  );
};

export default EmptyComponent;

import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import image from '../../../assests/images/chair.jpg';

const ViewImageScreen = () => {
  const array = [10, 'Apple', 'Pear', 'Watermelon'];
  const [id, ...res] = array;
  console.log(id);
  console.log(res);
  const showProducts = (id, ...products) => {
    console.log(id);
    console.log(products);
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => showProducts(id, ...res)}
        />
        <TouchableOpacity style={styles.buttonDelete} />
      </View>
      <View>
        <Image source={image} style={styles.imageStyle} resizeMode="contain" />
      </View>
    </View>
  );
};

export default ViewImageScreen;

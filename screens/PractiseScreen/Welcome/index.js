import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import image from '../../../assests/images/background.jpg';
import logoImage from '../../../assests/images/logo-red.png';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={image} style={styles.imageContainer}>
        <View>
          <Image source={logoImage} style={styles.imageStyle} />
          <Text style={styles.textDescription}>Set what you don't need</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.firstButton}
            onPress={() => navigation.navigate('ViewImage')}
          />
          <TouchableOpacity
            style={styles.secondButton}
            onPress={() => navigation.navigate('ViewImage')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

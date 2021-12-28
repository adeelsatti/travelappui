import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-vector-icons/dist';
import VectorIconComponents from '../../VectorIconComponents';

const DrawerItems = props => {
  const {
    title = props.title,
    iconName = props.iconName,
    size = props.size,
    color = props.color,
    type = props.type,
    onPress = props.onPress,
  } = props;
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <VectorIconComponents
          name={iconName}
          type={type}
          size={size}
          color={color}
        />
        <Text style={styles.drawerItemTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerItems;

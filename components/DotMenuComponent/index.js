import React from 'react';
import {Text} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useNavigation} from '@react-navigation/native';

import VectorIconComponents from '../VectorIconComponents';
import {AppStyles} from '../../themes';
import styles from './styles';

const DotMenuComponent = ({item, setModal, setSelectedItem}) => {
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate('AddUsers', item);
  };

  const onDeleteNavigate = () => {
    setSelectedItem(item);
    setModal(true);
  };
  return (
    <Menu style={styles.menu}>
      <MenuTrigger style={styles.menuTrigger}>
        <VectorIconComponents
          type="Entypo"
          name="dots-three-vertical"
          size={24}
          color={AppStyles.colorSet.grey}
        />
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={styles.optionsContainerStyle}>
        <MenuOption onSelect={onNavigate}>
          <Text style={styles.menuOption}>Update</Text>
        </MenuOption>
        <MenuOption onSelect={onDeleteNavigate}>
          <Text style={styles.menuOption}>Delete</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
export default DotMenuComponent;

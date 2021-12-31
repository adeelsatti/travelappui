import React from 'react';
import {Text} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useNavigation} from '@react-navigation/native';

import VectorIconComponents from '../VectorIconComponents';
import {AppStyles} from '../../themes';
import styles from './styles';

const DotMenuComponent = () => {
  const navigation = useNavigation();

  return (
    <MenuProvider>
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
          <MenuOption text="Update" />
          <MenuOption onSelect={() => navigation.navigate('Delete')}>
            <Text>Delete</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};
export default DotMenuComponent;

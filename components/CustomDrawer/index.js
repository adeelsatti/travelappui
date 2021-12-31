import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import img from '../../assests/images/img.png';
import styles from './styles';
import DrawerItems from './DrawerItems';
import {AppStyles} from '../../themes';

const CustomDrawer = props => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView style={styles.mainContainer} {...props}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={img} style={styles.profileImage} />
          </TouchableOpacity>
          <Text style={styles.userTitle}>John Wick</Text>
        </View>
        <View style={styles.drawerItemContainer}>
          <DrawerItems
            title={'Home'}
            iconName="home"
            size={24}
            type="Entypo"
            color={AppStyles.colorSet.black}
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItems
            title={'Profile'}
            type="Entypo"
            iconName="user"
            size={24}
            color={AppStyles.colorSet.black}
            onPress={() => navigation.navigate('Profile')}
          />
          <DrawerItems
            title={'Users'}
            type="Entypo"
            iconName="list"
            size={24}
            color={AppStyles.colorSet.black}
            onPress={() => navigation.navigate('Listing')}
          />
          <DrawerItems
            title={'Listing'}
            type="MaterialIcons"
            iconName="forum"
            size={24}
            color={AppStyles.colorSet.black}
            onPress={() => {}}
          />
          <DrawerItems
            title={'Like'}
            type="AntDesign"
            iconName="like1"
            size={24}
            color={AppStyles.colorSet.black}
            onPress={() => navigation.navigate('Liked')}
          />
          <DrawerItems
            title={'Setting'}
            type="Ionicons"
            iconName="ios-settings"
            size={24}
            color={AppStyles.colorSet.black}
            onPress={() => {}}
          />
          <DrawerItems
            title={'Help'}
            type="Entypo"
            iconName="help"
            size={24}
            color={AppStyles.colorSet.black}
            onPress={() => {}}
          />
          <View style={styles.logOutContainer}>
            <DrawerItems
              title={'Logout'}
              type="MaterialCommunityIcons"
              iconName="logout"
              size={24}
              color={AppStyles.colorSet.black}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;

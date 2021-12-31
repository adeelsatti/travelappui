import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Profile from './components/Profile';
import Liked from './components/Liked';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import colors from './assests/colors/colors';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from './components/Details';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './components/CustomDrawer';
import Listing from './screens/Listing';
import AddUsers from './screens/AddUsers';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.gray,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Drawer"
          component={DrawerComponent}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="home" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Liked"
          component={Liked}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="heart" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" size={32} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const DrawerComponent = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Comments"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*  <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />*/}
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddUsers"
          component={AddUsers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Listing"
          component={Listing}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
export default App;

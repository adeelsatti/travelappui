import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Listing = () => {
  const onClickAddData = async () => {
    console.log('clicked');
    firestore()
      .collection('travel')
      .add({
        name: 'Zeeshan Satti',
        gender: 'Male',
        status: 'Married',
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return (
    <TouchableOpacity onPress={onClickAddData}>
      <Text> Add Data </Text>
    </TouchableOpacity>
  );
};
export default Listing;

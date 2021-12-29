import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {RadioButton} from 'react-native-paper';

const Listing = () => {
  const [checked, setChecked] = useState('first');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const onClickAddData = async () => {
    console.log('clicked in');
    await firestore()
      .collection('Travel')
      .add({
        Fastname: fname,
        Lastname: lname,
        email: email,
        gender: checked === 'first' ? 'Male' : 'Female',
        age: age,
      })
      .then(() => {
        console.log('User added!');
        setFname('');
        setLname('');
        setEmail('');
        setAge('');
      });

    console.log('clicked out');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.addTitle}> Add Data </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.addInputText}
          placeholder="First name"
          value={fname}
          onChangeText={value => setFname(value)}
        />
        <TextInput
          style={styles.addInputText}
          placeholder="Last  name"
          value={lname}
          onChangeText={value => setLname(value)}
        />
        <TextInput
          style={styles.addInputText}
          placeholder="Your Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <View style={styles.radioContainer}>
          <View>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.genderText}>Male</Text>
          </View>
          <View>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text style={styles.genderText}>Female</Text>
          </View>
        </View>
        <TextInput
          type="number"
          style={styles.addInputText}
          placeholder="Age"
          value={age}
          onChangeText={value => setAge(value)}
        />
      </View>
      <TouchableOpacity onPress={onClickAddData} style={styles.addButton}>
        <Text style={styles.buttonText}>Add Data</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Listing;

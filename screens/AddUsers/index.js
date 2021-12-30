import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {AppStyles} from '../../themes';

const AddUsers = () => {
  const [checked, setChecked] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);

  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [ageError, setAgeError] = useState('');

  const navigation = useNavigation();
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateAddForm = () => {
    if (!fname?.trim()?.length) {
      setFnameError('Enter First Name');
    }
    if (!lname?.trim()?.length) {
      setLnameError('Enter Last Name');
    }
    if (!email?.trim()?.length) {
      setEmailError('Enter Email');
    }
    if (email?.trim()?.length && !reg.test(email)) {
      console.log(!reg.test(email));
      setEmailError('incorrect email');
    }
    if (email?.trim()?.length && reg.test(email)) {
      setEmailError('');
    }
    if (!checked?.trim()?.length) {
      setGenderError('Select Gender');
    }
    if (!age?.trim()?.length) {
      setAgeError('Enter Age');
    }
    if (
      fname.trim().length &&
      lname.trim().length &&
      email.trim().length &&
      checked.trim().length &&
      age.trim().length
    ) {
      onAddData();
    }
  };
  const onAddData = async () => {
    console.log('clicked in');
    setLoading(true);

    await firestore().collection('travel1').add({
      FirstName: fname,
      LastName: lname,
      email: email,
      gender: checked,
      age: age,
    });
    console.log('clicked out');
    setLoading(false);
    navigation.navigate('Listing');
  };

  const onChangeFname = values => {
    setFname(values);
  };

  const onChangeLname = values => {
    setLname(values);
  };

  const onChangeEmail = values => {
    setEmail(values);
  };

  const onChangeAge = values => {
    setAge(values);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.addTitle}> Add User </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.addInputText}
          placeholder="First name"
          value={fname}
          onChangeText={onChangeFname}
        />
        {!fname && <Text style={styles.errorText}>{fnameError}</Text>}
        <TextInput
          style={styles.addInputText}
          placeholder="Last  name"
          value={lname}
          onChangeText={onChangeLname}
        />
        {!lname && <Text style={styles.errorText}>{lnameError}</Text>}
        <TextInput
          style={styles.addInputText}
          placeholder="Your Email"
          value={email}
          onChangeText={onChangeEmail}
        />
        {(!email || !reg.test.email) && (
          <Text style={styles.errorText}>{emailError}</Text>
        )}
        <View style={styles.radioContainer}>
          <View style={styles.innerContainer}>
            <RadioButton
              value="Male"
              status={checked === 'Male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Male')}
            />
            <Text style={styles.genderText}>Male</Text>
          </View>
          <View style={styles.innerContainer}>
            <RadioButton
              value="Female"
              status={checked === 'Female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Female')}
            />
            <Text style={styles.genderText}>Female</Text>
          </View>
        </View>
        {!checked && <Text style={styles.errorText}>{genderError}</Text>}
        <TextInput
          type="number"
          style={styles.addInputText}
          placeholder="Age"
          value={age}
          onChangeText={onChangeAge}
        />
        {!age && <Text style={styles.errorText}>{ageError}</Text>}
      </View>
      <TouchableOpacity onPress={validateAddForm} style={styles.addButton}>
        {loading ? (
          <View>
            <ActivityIndicator size="small" color={AppStyles.colorSet.pink} />
          </View>
        ) : (
          <Text style={styles.buttonText}>Add Data</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default AddUsers;

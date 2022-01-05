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
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';
import {AppStyles} from '../../themes';
import ageData from '../../assests/data/ageData';

const UpdateScreen = ({route}) => {
  const [checked, setChecked] = useState('');
  const [fname, setFname] = useState(route?.params?.data?.FirstName);
  const [lname, setLname] = useState(route?.params?.data?.LastName);
  const [email, setEmail] = useState(route?.params?.data?.email);
  const [value, setValue] = useState(route?.params?.data?.age);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [ageError, setAgeError] = useState('');

  const navigation = useNavigation();
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateUpdateForm = () => {
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
      setEmailError('incorrect email');
    }
    if (email?.trim()?.length && reg?.test(email)) {
      setEmailError('');
    }
    if (!checked?.trim()?.length) {
      setGenderError('Select Gender');
    }
    if (!value) {
      setAgeError('Enter Age');
    }
    if (
      fname?.trim()?.length &&
      lname?.trim()?.length &&
      email?.trim()?.length &&
      checked?.trim()?.length &&
      value
    ) {
      onUpdateUser();
    }
  };
  const onUpdateUser = async () => {
    setLoading(true);

    await firestore()?.collection('travel1')?.where('email', '=', email).get();
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
    setValue(values);
  };

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.addTitle}> Update User </Text>
      <View style={styles.updateContainer}>
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
        {(!email || !reg.test?.email) && (
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

        <DropDownPicker
          items={ageData}
          setOpen={setOpen}
          open={open}
          value={value}
          setValue={setValue}
          style={styles.dropDownPicker}
          containerStyle={styles.containerWidth}
          dropDownContainerStyle={styles.dropDownContainer}
          onChange={onChangeAge}
        />
        {!value && <Text style={styles.errorText}>{ageError}</Text>}
      </View>
      <TouchableOpacity onPress={validateUpdateForm} style={styles.addButton}>
        {loading ? (
          <View>
            <ActivityIndicator size="small" color={AppStyles.colorSet.pink} />
          </View>
        ) : (
          <Text style={styles.buttonText}>Update Data</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default UpdateScreen;

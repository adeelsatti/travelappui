import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';
import {AppStyles} from '../../themes';
import ageData from '../../assests/data/ageData';
import * as Actions from '../../constants';
import {connect} from 'react-redux';

const AddUsers = props => {
  const routeParams = props?.route?.params;
  console.log('user: ', props?.route?.params);

  const [checked, setChecked] = useState(routeParams?.gender || '');
  const [fname, setFname] = useState(routeParams?.firstName || '');
  const [lname, setLname] = useState(routeParams?.lastName || '');
  const [email, setEmail] = useState(routeParams?.email || '');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(routeParams?.age || '');
  const [items, setItems] = useState(ageData);

  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [ageError, setAgeError] = useState('');

  const user = {
    id: !routeParams ? Math.floor(Math.random() * 1000) + 1 : routeParams?.id,
    firstName: fname,
    lastName: lname,
    email: email,
    gender: checked,
    age: value,
  };

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
      routeParams?.id ? onUpdateData() : onAddData();
    }
  };

  const onAddData = async () => {
    setLoading(true);
    props?.addNewUser(user);
    setLoading(false);
    onNavigate();
  };

  const onUpdateData = async () => {
    setLoading(true);
    console.log(user, routeParams?.id);
    props?.updateUser(routeParams?.id, user);
    setLoading(false);
    onNavigate();
  };

  const onNavigate = () => {
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
  const onChangeItem = values => {
    setValue(values);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.addTitle}>
        {!routeParams?.email ? 'Add User' : 'Update User'}
      </Text>
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
        {(!email || !reg.test?.email) && (
          <Text style={styles.errorText}>{emailError}</Text>
        )}
        <View style={styles.radioContainer}>
          <View style={styles.innerContainer}>
            <RadioButton
              value={props?.gender}
              status={checked === 'Male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Male')}
            />
            <Text style={styles.genderText}>Male</Text>
          </View>
          <View style={styles.innerContainer}>
            <RadioButton
              value={props?.gender}
              status={checked === 'Female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Female')}
            />
            <Text style={styles.genderText}>Female</Text>
          </View>
        </View>
        {!checked && <Text style={styles.errorText}>{genderError}</Text>}

        <DropDownPicker
          items={items}
          setOpen={setOpen}
          open={open}
          value={value}
          setValue={setValue}
          itemKey={items.id}
          style={styles.dropDownPicker}
          containerStyle={styles.containerWidth}
          dropDownContainerStyle={styles.dropDownContainer}
          setItems={ageData.values}
          onChange={() => onChangeItem}
        />
        {!value && <Text style={styles.errorText}>{ageError}</Text>}
      </View>

      <TouchableOpacity onPress={validateAddForm} style={styles.addButton}>
        {loading ? (
          <View>
            <ActivityIndicator size="small" color={AppStyles.colorSet.pink} />
          </View>
        ) : (
          <Text style={styles.buttonText}>
            {!routeParams?.id ? 'Add User' : 'Update User'}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  users: state?.users,
});

const mapDispatchToProps = dispatch => ({
  addNewUser: user => dispatch({type: Actions.CREATE_USER, user}),
  updateUser: (id, user) => dispatch({type: Actions.EDIT_USER, id, user}),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);

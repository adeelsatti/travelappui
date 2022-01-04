import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import logo from '../../assests/images/11.png';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function firebaseSignUpCall() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch(error => {
        if (error?.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        } else if (error?.code === 'auth/weak-password') {
          alert(
            ' The given password is invalid. Password should be at least 6 characters',
          );
        } else if (error?.code === 'auth/invalid-email') {
          alert('Email format is invalid!');
        }

      });
  }

  return (
    <>
      <View style={styles.imageWrapper}>
        <Image source={logo} alt={'Logo Image'} style={styles.logoImage} />
        <Text style={styles.appTitle}>Travel App</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="User Name"
          style={styles.usernameInput}
          onChangeText={value => setUsername(value)}
        />
        <TextInput
          type="email"
          onChangeText={value => setEmail(value)}
          placeholder="Email"
          style={styles.usernameInput}
        />
        <TextInput
          onChangeText={value => setPassword(value)}
          placeholder="Password"
          style={styles.usernameInput}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.usernameInput}
        />
      </View>
      <TouchableOpacity style={styles.btnSignup} onPress={firebaseSignUpCall}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};
export default SignUp;

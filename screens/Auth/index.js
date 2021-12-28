import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import logo from '../../assests/images/11.png';
import VectorIconComponents from '../../components/VectorIconComponents';
import AppStyles from '../../themes/AppStyles';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Auth = () => {
  const [change, setChange] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const navigation = useNavigation();

  function firebaseSignUpCall() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setChange(false);
      })
      .catch(error => {
        if (error?.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
        if (error?.code === 'auth/weak-password') {
          alert(
            ' The given password is invalid. Password should be at least 6 characters',
          );
        }
        if (error?.code === 'auth/invalid-email') {
          alert('Email format is invalid!');
        }
        console.log(error);
      });
  }

  function firebaseLoginCall() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('TabNavigator');
      })
      .catch(error => {
        if (error?.code === 'auth/user-not-found') {
          alert('That email address is invalid!');
        }
        if (error?.code === 'auth/wrong-password') {
          alert('Password is Invalid');
        }

        console.log(error);
      });
  }

  function onLoginClick() {
    {
      firebaseLoginCall();
    }
  }

  function handleSingUp() {
    {
      firebaseSignUpCall();
    }
  }

  const SignIn = () => {
    return (
      <>
        <TouchableOpacity style={styles.btnFacebookLogin} onPress={() => {}}>
          <VectorIconComponents
            name="facebook-square"
            color={AppStyles.colorSet.white}
            type="AntDesign"
            size={20}
            style={styles.fbBtnIcon}
          />
          <Text style={styles.btnFbTitle}>Facebook</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.usernameInput}
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            placeholder="Password"
            style={styles.usernameInput}
            secureTextEntry={false}
            onChangeText={value => setPassword(value)}
            maxLength={10}
          />
        </View>
        <TouchableOpacity style={styles.btnSignup} onPress={onLoginClick}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.forgetContainer}>
          <TouchableOpacity>
            <Text style={styles.forgetPassword}>Forget Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createNewAccountContainer}
            onPress={() => setChange(true)}>
            <Text style={styles.createNewAccount}>Create new account ? </Text>
            <Text style={styles.createAnAccount}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const SignUp = () => {
    return (
      <>
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
        <TouchableOpacity style={styles.btnSignup} onPress={handleSingUp}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageWrapper}>
        <Image source={logo} alt={'Logo Image'} style={styles.logoImage} />
        <Text style={styles.appTitle}>Travel App</Text>
      </View>
      {!change ? SignIn() : SignUp()}
    </View>
  );
};

export default Auth;

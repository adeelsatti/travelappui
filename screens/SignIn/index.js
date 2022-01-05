import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import VectorIconComponents from '../../components/VectorIconComponents';
import AppStyles from '../../themes/AppStyles';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import logo from '../../assests/images/11.png';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebaseLoginCall = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('TabNavigator');
      })
      .catch(error => {
        if (error?.code === 'auth/user-not-found') {
          alert('That email address is invalid!');
        } else if (error?.code === 'auth/wrong-password') {
          alert('Password is Invalid');
        }
      });
  };

  const onCreateNewAccount = () => {
    navigation.navigate('SignUp');
  };

  const onChangePassword = value => {
    setPassword(value);
  };

  const onChangeEmail = value => {
    setEmail(value);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageWrapper}>
        <Image source={logo} alt={'Logo Image'} style={styles.logoImage} />
        <Text style={styles.appTitle}>Travel App</Text>
      </View>
      <TouchableOpacity style={styles.btnFacebookLogin}>
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
          onChangeText={onChangeEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.usernameInput}
          secureTextEntry={true}
          onChangeText={onChangePassword}
          maxLength={10}
        />
      </View>
      <TouchableOpacity style={styles.btnSignup} onPress={firebaseLoginCall}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.forgetContainer}>
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Forget Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createNewAccountContainer}
          onPress={onCreateNewAccount}>
          <Text style={styles.createNewAccount}>Create new account ? </Text>
          <Text style={styles.createAnAccount}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Link} from '@react-navigation/native';
import {signup} from '../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';
import CustomButton from '../components/CustomButton';
import AppLayout from '../components/HOC/AppLayout';
import Input from '../components/Input';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const token = await signup(email, password);

      if (token) {
        await AsyncStorage.setItem('authToken', token);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(
        '____________________________________________________________________________________',
      );
      console.log('Arrr matey! No treasure found. (Invalid credentials)');
      console.log(
        '____________________________________________________________________________________',
      );
    }
  };

  return (
    <AppLayout hideNavigation>
      <View
        style={{
          flex: 1,
          marginBottom: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.card}>
          <Input placeholder="Email" onChangeText={setEmail} />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <CustomButton
            label="Sign up"
            onPress={handleSignup}
            color="primary"
          />

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text>Don't have an account?</Text>

            <Link
              style={styles.link}
              to="Signup"
              onPress={e => {
                e.preventDefault();
                e.stopPropagation();

                navigation.navigate('Login');
              }}>
              {' '}
              Log in
            </Link>
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default SignupScreen;

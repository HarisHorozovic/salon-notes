import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../api/auth';
import CustomButton from '../components/CustomButton';
import AppLayout from '../components/HOC/AppLayout';
import Input from '../components/Input';
import Card from '../components/Card';
import Link from '../components/Link';
import Text from '../components/Text';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkAuth = async () => {
    const item = await AsyncStorage.getItem('authToken');

    if (item) {
      navigation.navigate('Home');
    }
  };
  useEffect(() => {
    checkAuth().then();
    //   eslint-disable-next-line
  }, []);

  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      if (token) {
        await AsyncStorage.setItem('authToken', token);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(
        '____________________________________________________________________________________',
      );
      console.log('Invalid email or password');
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
        <Card>
          <Input placeholder="Email" onChangeText={setEmail} />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <CustomButton label="Login" onPress={handleLogin} color="primary" />

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text>Don't have an account?</Text>

            <Link
              to="Signup"
              onPress={e => {
                e.preventDefault();
                e.stopPropagation();

                navigation.navigate('Signup');
              }}>
              {' '}
              Sign Up
            </Link>
          </View>
        </Card>
      </View>
    </AppLayout>
  );
};

export default LoginScreen;

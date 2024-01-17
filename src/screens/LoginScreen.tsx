import React from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../api/auth';
import AppLayout from '../components/HOC/AppLayout';
import Card from '../components/Card';
import Link from '../components/Link';
import Text from '../components/Text';
import {showMessage} from 'react-native-flash-message';
import AuthForm from '../components/AuthForm';

const LoginScreen = ({navigation}) => {
  const handleLogin = async (email: string, password: string) => {
    try {
      const token = await login(email, password);
      if (token) {
        await AsyncStorage.setItem('authToken', token);
        navigation.navigate('Home');
      } else {
        showMessage({message: 'Invalid email or password', type: 'danger'});
      }
    } catch (error) {
      showMessage({message: error.message, type: 'danger'});
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
          <AuthForm onPress={handleLogin} buttonLabel="Login" />

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

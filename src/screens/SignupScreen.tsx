import React from 'react';
import {View} from 'react-native';
import Link from '../components/Link';
import {signup} from '../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLayout from '../components/HOC/AppLayout';
import Card from '../components/Card';
import Text from '../components/Text';
import {showMessage} from 'react-native-flash-message';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({navigation}) => {
  const handleSignup = async (email: string, password: string) => {
    try {
      const token = await signup(email, password);

      if (token) {
        await AsyncStorage.setItem('authToken', token);
        navigation.navigate('Home');
      }
    } catch (error: any) {
      showMessage({
        message: error?.response?.data?.message || 'Invalid credentials',
        type: 'danger',
      });
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
          <AuthForm onPress={handleSignup} buttonLabel="Signup" />

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text>Don't have an account?</Text>

            <Link
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
        </Card>
      </View>
    </AppLayout>
  );
};

export default SignupScreen;

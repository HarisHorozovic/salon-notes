import Input from '../Input';
import CustomButton from '../CustomButton';
import {View} from 'react-native';
import React, {useState} from 'react';
import {getAuthFormValidationErrors} from './validator';

export default function AuthForm({onPress}: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <View>
      <Input
        placeholder="Email"
        onChangeText={(value: string) => {
          const newError = {...errors};
          if (newError['email']) {
            delete newError['email'];
            setErrors(newError);
          }
          setEmail(value);
        }}
        error={errors['email']}
      />
      <Input
        error={errors['password']}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(value: string) => {
          const newError = {...errors};
          if (newError['password']) {
            delete newError['password'];
            setErrors(newError);
          }
          setPassword(value);
        }}
      />

      <CustomButton
        label="Login"
        onPress={() => {
          const err = getAuthFormValidationErrors(email, password);
          if (Object.keys(err).length === 0) {
            onPress(email, password);
          } else {
            setErrors(err);
          }
        }}
        color="primary"
      />
    </View>
  );
}

export type AuthFormProps = {
  onPress: (email: string, password: string) => void;
};

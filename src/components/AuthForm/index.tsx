import Input from '../Input';
import CustomButton from '../CustomButton';
import {ActivityIndicator, useColorScheme, View} from 'react-native';
import React, {useState} from 'react';
import {getAuthFormValidationErrors} from './validator';
import {colors} from '../../styles';

export default function AuthForm({onPress, buttonLabel}: AuthFormProps) {
  const isDarkMode = useColorScheme() === 'dark';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

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
        label={submitting ? '' : buttonLabel}
        disabled={submitting}
        onPress={async () => {
          const err = getAuthFormValidationErrors(email, password);
          if (Object.keys(err).length === 0) {
            setSubmitting(true);
            await onPress(email, password);
            setSubmitting(false);
          } else {
            setErrors(err);
          }
        }}
        color="primary">
        {submitting && (
          <ActivityIndicator
            size="small"
            color={
              isDarkMode
                ? colors.dark.button.primary.color
                : colors.light.button.primary.color
            }
          />
        )}
      </CustomButton>
    </View>
  );
}

export type AuthFormProps = {
  buttonLabel: string;
  onPress: (email: string, password: string) => Promise<void>;
};

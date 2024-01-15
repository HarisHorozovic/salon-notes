import {useColorScheme, View} from 'react-native';
import {NoteItemStep} from '../../types';
import React from 'react';
import CustomButton from '../CustomButton';
import Input from '../Input';
import Text from '../Text';
import {stepsInputStyles} from './style';
import Icon from '../Icon';
import {colors} from '../../styles';
// import { FontAwesome } from "@expo/vector-icons";

export default function StepsInput({
  value,
  index,
  setValue,
  onRemove,
}: {
  key?: number | string;
  value?: NoteItemStep;
  index: number;
  setValue: (index: number, key?: string, value?: any) => void;
  onRemove: (index: number) => void;
}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={stepsInputStyles.container}>
      <Input
        style={stepsInputStyles.input}
        placeholder="Key"
        onChangeText={val => {
          setValue(index, val, value.value);
        }}
        value={value?.key}
      />
      <Input
        style={stepsInputStyles.input}
        placeholder="Value"
        onChangeText={val => {
          if (value.key) {
            setValue(index, value.key, val);
          }
        }}
        value={value?.value}
      />
      <CustomButton color="danger" onPress={() => onRemove(index)}>
        <Icon
          iconProvider="fontawesome"
          name="remove"
          color={
            isDarkMode
              ? colors.dark.button.danger.color
              : colors.light.button.danger.color
          }
        />
      </CustomButton>
    </View>
  );
}

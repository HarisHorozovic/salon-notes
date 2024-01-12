import {View, StyleSheet, Text} from 'react-native';
import {NoteItemStep} from '../types';
import React from 'react';
import CustomButton from './CustomButton';
import Input from './Input';
// import { FontAwesome } from "@expo/vector-icons";

const inputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
});
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
  return (
    <View style={inputStyles.container}>
      <Input
        style={inputStyles.input}
        placeholder="Key"
        onChangeText={val => {
          setValue(index, val, value.value);
        }}
        value={value?.key}
      />
      <Input
        style={inputStyles.input}
        placeholder="Value"
        onChangeText={val => {
          if (value.key) {
            setValue(index, value.key, val);
          }
        }}
        value={value?.value}
      />
      <CustomButton color="danger" onPress={() => onRemove(index)}>
        <Text>Remove Icon</Text>
        {/*<FontAwesome name="remove" size={14} color="#fff" />*/}
      </CustomButton>
    </View>
  );
}

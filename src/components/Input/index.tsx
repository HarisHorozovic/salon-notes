import {TextInput, TextInputProps, useColorScheme} from 'react-native';
import getStyle from './style';
import {getStyleForProp} from '../../utils';

export default function Input(props: TextInputProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const style = getStyle(isDarkMode);

  return (
    <TextInput
      {...props}
      style={getStyleForProp(style.input_base, props.style)}
    />
  );
}

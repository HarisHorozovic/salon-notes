import {TextInput, TextInputProps, useColorScheme} from 'react-native';
import {getStyleForProp} from '../../utils';
import getStyle from '../../styles';

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

import {TextInput, TextInputProps, useColorScheme} from 'react-native';
import {getStyleForProp} from '../../utils';
import getStyle from '../../styles';
import ErrorText from '../ErrorText';

export default function Input(props: TextInputProps & {error?: string}) {
  const isDarkMode = useColorScheme() === 'dark';
  const style = getStyle(isDarkMode);

  return (
    <>
      <TextInput
        {...props}
        style={getStyleForProp(style.input_base, props.style)}
      />
      {props.error && <ErrorText text={props.error} />}
    </>
  );
}

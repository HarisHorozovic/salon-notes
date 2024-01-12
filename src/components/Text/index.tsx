import {Text as TextBase, TextProps, useColorScheme} from 'react-native';
import getStyle from '../../styles';
import {getStyleForProp} from '../../utils';

export default function Text(props: TextProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const style = getStyle(isDarkMode);

  return (
    <TextBase {...props} style={getStyleForProp(style.text, props.style)}>
      {props.children}
    </TextBase>
  );
}

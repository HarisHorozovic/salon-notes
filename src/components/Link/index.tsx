import {TextProps, useColorScheme} from 'react-native';
import getStyle from '../../styles';
import {getStyleForProp} from '../../utils';

export default function Link(props: TextProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const style = getStyle(isDarkMode);

  return (
    <Link {...props} style={getStyleForProp(style.link, props.style)}>
      {props.children}
    </Link>
  );
}

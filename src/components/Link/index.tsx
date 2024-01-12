import {TextProps, useColorScheme} from 'react-native';
import getStyle from '../../styles';
import {getStyleForProp} from '../../utils';
import {Link as NavLink} from '@react-navigation/native';

export default function Link(props: TextProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const style = getStyle(isDarkMode);

  return (
    <NavLink {...props} style={getStyleForProp(style.link, props.style)}>
      {props.children}
    </NavLink>
  );
}

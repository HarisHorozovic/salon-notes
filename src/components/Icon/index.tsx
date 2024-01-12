import {IconProps} from '../../types';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Text from '../Text';
import {useColorScheme} from 'react-native';
import getStyle from '../../styles';

export default function Icon({
  iconProvider,
  name,
  size,
  color,
  style,
}: IconProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const baseColor = getStyle(isDarkMode).icon_color.color;

  switch (iconProvider) {
    case 'fontawesome':
      return (
        <FontAwesomeIcon
          name={name}
          size={size || 24}
          color={color || baseColor}
          style={style}
        />
      );
    case 'antdesign':
      return (
        <AntDesignIcon
          name={name}
          size={size || 24}
          color={color || baseColor}
          style={style}
        />
      );
    case 'ionic':
      return (
        <IonicIcon
          name={name}
          size={size || 24}
          color={color || baseColor}
          style={style}
        />
      );
    case 'entypo':
      return (
        <EntypoIcon
          name={name}
          size={size || 24}
          color={color || baseColor}
          style={style}
        />
      );
    default:
      return <Text>Please select icon provider</Text>;
  }
}

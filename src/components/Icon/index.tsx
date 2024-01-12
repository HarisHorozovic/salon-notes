import {IconProps} from '../../types';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Text from '../Text';

export default function Icon({iconProvider, name, size, color}: IconProps) {
  switch (iconProvider) {
    case 'fontawesome':
      return (
        <FontAwesomeIcon
          name={name}
          size={size || 24}
          color={color || '#000'}
        />
      );
    case 'antdesign':
      return (
        <AntDesignIcon name={name} size={size || 24} color={color || '#000'} />
      );
    default:
      return <Text>Please select icon provider</Text>;
  }
}

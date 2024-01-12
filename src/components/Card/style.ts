import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const getStyle = (isDarkMode: boolean): any =>
  StyleSheet.create({
    card: {
      borderRadius: 5,
      backgroundColor: isDarkMode
        ? colors.dark.backgroundColor
        : colors.light.backgroundColor,
      color: isDarkMode ? colors.dark.color : colors.light.color,
      padding: 20,
      elevation: 5,
    },
  });

export default getStyle;

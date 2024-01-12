import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const getStyle = (isDarkMode: boolean) =>
  StyleSheet.create({
    input_base: {
      height: 50,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: isDarkMode
        ? colors.dark.borderColor
        : colors.light.borderColor,
      backgroundColor: isDarkMode
        ? colors.dark.backgroundColor
        : colors.light.backgroundColor,
      borderRadius: 5,
      marginVertical: 5,
      marginHorizontal: 3,
      paddingHorizontal: 5,
    },
  });

export default getStyle;

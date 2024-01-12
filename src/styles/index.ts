import {StyleSheet} from 'react-native';

const getStyle = (isDarkMode: boolean) =>
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
    app_layout: {
      flex: 1,
      paddingBottom: 60,
      backgroundColor: isDarkMode
        ? colors.dark.appMainBackgroundColor
        : colors.light.appMainBackgroundColor,
      color: isDarkMode ? colors.dark.color : colors.light.color,
    },
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
    link: {
      color: 'blue',
    },

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text_area: {height: 100, textAlignVertical: 'top'},
  });

export const colors: any = {
  light: {
    appMainBackgroundColor: 'grey',
    backgroundColor: '#fff',
    color: '#000',
    borderColor: '#ccc',
  },
  dark: {
    appMainBackgroundColor: 'grey',
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#ccc',
  },
};

export default getStyle;

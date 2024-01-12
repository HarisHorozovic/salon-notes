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
      margin: 10,
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
    text: {
      color: isDarkMode ? colors.dark.color : colors.light.color,
    },

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text_area: {height: 100, textAlignVertical: 'top'},
  });

export const getStyleWithScheme = (
  isDarkMode: boolean,
  scheme: 'primary' | 'danger' | 'default',
  disabled?: boolean,
) => {
  const colorScheme = isDarkMode ? colors.dark : colors.light;
  return StyleSheet.create({
    button: {
      height: 40,
      ...colorScheme.button[scheme],
      paddingVertical: 5,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 5,
      margin: 10,
      opacity: disabled ? 0.7 : 1,
    },
  });
};

export const colors: any = {
  light: {
    appMainBackgroundColor: 'grey',
    backgroundColor: '#fff',
    color: '#000',
    borderColor: '#ccc',
    button: {
      primary: {backgroundColor: '#8F00FF', color: '#fff'},
      danger: {backgroundColor: 'red', color: '#fff'},
      default: {backgroundColor: '#ccc', color: '#000'},
    },
  },
  dark: {
    appMainBackgroundColor: 'grey',
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#ccc',
    button: {
      primary: {backgroundColor: '#8F00FF', color: '#fff'},
      danger: {backgroundColor: 'red', color: '#fff'},
      default: {backgroundColor: '#ccc', color: '#000'},
    },
  },
};

export default getStyle;

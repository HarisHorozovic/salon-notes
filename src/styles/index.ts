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
      color: '#6750A4',
    },
    text: {
      color: isDarkMode ? colors.dark.color : colors.light.color,
    },
    icon_color: {color: isDarkMode ? colors.dark.color : colors.light.color},

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
      height: 30,
      ...colorScheme.button[scheme],
      paddingVertical: 0,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 5,
      margin: 5,
      opacity: disabled ? 0.7 : 1,
    },
  });
};

export const colors: any = {
  light: {
    appMainBackgroundColor: '#DED8E1',
    backgroundColor: '#F7F2FA',
    color: '#1D1B20',
    borderColor: '#ccc',
    button: {
      primary: {backgroundColor: '#6750A4', color: '#fff'},
      danger: {backgroundColor: '#B3261E', color: '#fff'},
      default: {backgroundColor: '#49454F', color: '#FEF7FF'},
    },
  },
  dark: {
    appMainBackgroundColor: '#141218',
    backgroundColor: '#2B2930',
    color: '#E6E0E9',
    borderColor: '#938F99',
    button: {
      primary: {backgroundColor: '#6750A4', color: '#FFF'},
      danger: {backgroundColor: '#B3261E', color: '#fff'},
      default: {backgroundColor: '#CCC2DC', color: '#332D41'},
    },
  },
  global: {
    danger: '#B3261E',
  },
};

export default getStyle;

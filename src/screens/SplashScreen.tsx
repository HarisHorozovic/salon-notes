import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import AppLayout from '../components/HOC/AppLayout';
import Icon from '../components/Icon';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {colors} from '../styles';

export default function SplashScreen({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    const checkAuth = async () => {
      const item = await AsyncStorage.getItem('authToken');

      if (item) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    };

    checkAuth().then();
  }, [navigation]);

  const style = StyleSheet.create({
    center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  });

  return (
    <AppLayout hideNavigation>
      <View style={style.center}>
        <Icon
          iconProvider="fontawesome"
          name="hand-scissors-o"
          size={64}
          color={isDarkMode ? colors.dark.color : colors.light.color}
        />
      </View>
    </AppLayout>
  );
}

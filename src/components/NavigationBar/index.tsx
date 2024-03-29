import {TouchableOpacity, useColorScheme, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../Card';
import {navigationBarStyles} from './style';
import Icon from '../Icon';
import {colors} from '../../styles';

type NavigationItem = {
  text: string;
  icon: any;
  to: any;
};
export default function NavigationBar({items}: {items: Array<NavigationItem>}) {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const handleLogout = async () => {
    const item = await AsyncStorage.getItem('authToken');
    if (item) {
      await AsyncStorage.removeItem('authToken');
    }

    navigation.navigate('Login' as any);
  };

  return (
    <Card style={navigationBarStyles.nav}>
      <View style={navigationBarStyles.icon_list}>
        {items.map((item: NavigationItem, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate(item.to);
            }}>
            <Icon
              iconProvider="antdesign"
              name={item.icon}
              color={isDarkMode ? colors.dark.color : colors.light.color}
            />
            {/*<AntDesign name={item.icon} size={24} />*/}
          </TouchableOpacity>
        ))}
      </View>
      <View style={navigationBarStyles.icon_logout}>
        <TouchableOpacity onPress={handleLogout}>
          <Icon
            iconProvider="antdesign"
            name="logout"
            color={isDarkMode ? colors.dark.color : colors.light.color}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
}

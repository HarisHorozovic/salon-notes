import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../Card';
import Text from '../Text';
import {navigationBarStyles} from './style';

type NavigationItem = {
  text: string;
  icon: any;
  to: any;
};
export default function NavigationBar({items}: {items: Array<NavigationItem>}) {
  const navigation = useNavigation();

  const handleLogout = async () => {
    const item = await AsyncStorage.getItem('authToken');
    if (item) {
      await AsyncStorage.removeItem('authToken');
    }

    navigation.navigate('Login' as any);
  };

  return (
    <Card style={navigationBarStyles.nav}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {items.map((item: NavigationItem, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate(item.to);
            }}>
            <Text>Icon {item.icon}</Text>
            {/*<AntDesign name={item.icon} size={24} />*/}
          </TouchableOpacity>
        ))}
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Icon Logout</Text>
          {/*<AntDesign name="logout" size={24} />*/}
        </TouchableOpacity>
      </View>
    </Card>
  );
}

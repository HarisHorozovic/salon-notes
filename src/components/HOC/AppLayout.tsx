import {View} from 'react-native';
import NavigationBar from '../NavigationBar';

export default function AppLayout({
  children,
  hideNavigation,
}: {
  children: any;
  hideNavigation?: boolean;
}) {
  return (
    //   App level background color goes here
    <View style={{flex: 1, paddingBottom: 60}}>
      {children}
      {!hideNavigation && (
        <NavigationBar items={[{text: 'Home', icon: 'home', to: 'Home'}]} />
      )}
    </View>
  );
}

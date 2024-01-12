import {useColorScheme, View, ViewProps} from 'react-native';
import NavigationBar from '../../NavigationBar';
import {getStyleForProp} from '../../../utils';
import getStyle from '../../../styles';

export default function AppLayout({
  style,
  children,
  hideNavigation,
}: ViewProps & {
  hideNavigation?: boolean;
}) {
  const isDarkMode = useColorScheme() === 'dark';
  const localStyle = getStyle(isDarkMode);

  return (
    //   App level background color goes here
    <View style={getStyleForProp(localStyle.app_layout, style)}>
      {children}
      {!hideNavigation && (
        <NavigationBar items={[{text: 'Home', icon: 'home', to: 'Home'}]} />
      )}
    </View>
  );
}

import {
  ScrollView,
  ScrollViewProps,
  useColorScheme,
  View,
  ViewProps,
} from 'react-native';
import {getStyleForProp} from '../../utils';
import getStyle from '../../styles';

export default function Card(
  props: (ViewProps | ScrollViewProps) & {scroll?: boolean},
) {
  const isDarkMode = useColorScheme() === 'dark';
  const style = getStyle(isDarkMode);

  return props.scroll ? (
    <ScrollView {...props} style={getStyleForProp(style.card, props.style)}>
      {props.children}
    </ScrollView>
  ) : (
    <View {...props} style={getStyleForProp(style.card, props.style)}>
      {props.children}
    </View>
  );
}

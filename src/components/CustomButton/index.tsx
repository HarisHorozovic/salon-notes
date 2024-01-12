import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {useState} from 'react';
import {getStyleWithScheme} from '../../styles';
import {getStyleForProp} from '../../utils';

export default function CustomButton({
  style,
  children,
  label,
  onPress,
  color = 'default',
  position = 'center',
  disabled,
}: {
  style: any;
  children?: any;
  label?: string;
  onPress?: (e: GestureResponderEvent) => void;
  color?: 'primary' | 'danger' | 'default';
  position?: 'flex-end' | 'flex-start' | 'center';
  disabled?: boolean;
}) {
  const buttonStyles = StyleSheet.create({
    container: {alignItems: position, justifyContent: 'center'},
  });
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyleWithScheme(isDarkMode, color, disabled);

  return (
    <View style={buttonStyles.container}>
      <TouchableOpacity
        disabled={disabled || false}
        containerStyle={{overflow: 'visible'}}
        onPress={onPress}
        style={getStyleForProp(styles.button, style)}>
        {children ? (
          children
        ) : (
          <Text
            style={{
              color: styles.button.color,
            }}>
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

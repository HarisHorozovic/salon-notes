import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

const colorSchemes = {
  primary: {backgroundColor: '#8F00FF', color: '#fff'},
  danger: {backgroundColor: 'red', color: '#fff'},
  default: {backgroundColor: '#ccc', color: '#000'},
};

export default function CustomButton({
  children,
  label,
  onPress,
  color = 'default',
  position = 'center',
  disabled,
}: {
  children?: any;
  label?: string;
  onPress?: (e: GestureResponderEvent) => void;
  color?: 'primary' | 'danger' | 'default';
  position?: 'flex-end' | 'flex-start' | 'center';
  disabled?: boolean;
}) {
  const [isPress, setIsPress] = useState(false);

  const styles = StyleSheet.create({
    container: {alignItems: position, justifyContent: 'center'},
    button: {
      height: 40,
      ...colorSchemes[color],
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
    button_press: {
      height: 40,
      ...colorSchemes[color],
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 5,
      shadowOpacity: 0,
      elevation: 0,
      margin: 10,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled || false}
        containerStyle={{overflow: 'visible'}}
        onPress={onPress}
        onPressIn={() => {
          setIsPress(true);
        }}
        onPressOut={() => {
          setIsPress(false);
        }}
        style={isPress ? styles.button_press : styles.button}>
        {children ? (
          children
        ) : (
          <Text
            style={{
              color: colorSchemes[color].color,
            }}>
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export default function CustomButton({
  label,
  onPress,
  backgroundColor,
  textColor,
}: {
  label: string;
  onPress?: (e: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
}) {
  const [isPress, setIsPress] = useState(false);

  const styles = StyleSheet.create({
    container: { alignItems: "center", justifyContent: "center" },
    button: {
      height: 30,
      color: textColor || "#000",
      backgroundColor: backgroundColor || "#ccc",
      paddingVertical: 5,
      paddingHorizontal: 12,
      borderRadius: 5,
      shadowColor: "rgba(0,0,0, .4)",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 2,
    },
    button_press: {
      height: 30,
      color: textColor || "#000",
      backgroundColor: backgroundColor || "#ccc",
      paddingVertical: 5,
      paddingHorizontal: 12,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        containerStyle={{ overflow: "visible" }}
        onPress={onPress}
        onPressIn={() => {
          setIsPress(true);
        }}
        onPressOut={() => {
          setIsPress(false);
        }}
        style={isPress ? styles.button_press : styles.button}
      >
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

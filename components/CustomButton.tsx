import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

const colorSchemes = {
  primary: { backgroundColor: "#8F00FF", color: "#fff" },
  default: { backgroundColor: "#ccc", color: "#000" },
};

export default function CustomButton({
  children,
  label,
  onPress,
  color = "default",
  position = "center",
}: {
  children?: any;
  label?: string;
  onPress?: (e: GestureResponderEvent) => void;
  color?: "primary" | "default";
  position?: "flex-end" | "flex-start" | "center";
}) {
  const [isPress, setIsPress] = useState(false);

  const styles = StyleSheet.create({
    container: { alignItems: position, justifyContent: "center" },
    button: {
      height: 40,
      ...colorSchemes[color],
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      shadowColor: "rgba(0,0,0, .4)",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 2,
      margin: 10,
    },
    button_press: {
      height: 30,
      ...colorSchemes[color],
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      margin: 10,
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
        {children ? children : <Text style={colorSchemes[color]}>{label}</Text>}
      </TouchableOpacity>
    </View>
  );
}

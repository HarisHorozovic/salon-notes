import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "Salon App" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Salon App" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Salon App" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Salon App" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

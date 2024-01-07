import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../api/auth";
import { Link } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkAuth = async () => {
    const item = await AsyncStorage.getItem("authToken");

    if (item) {
      navigation.navigate("Home");
    }
  };
  useEffect(() => {
    checkAuth().then();
  }, []);

  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      if (token) {
        await AsyncStorage.setItem("authToken", token);
        navigation.navigate("Home");
      }
    } catch (error) {
      alert("Arrr matey! No treasure found. (Invalid credentials)");
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />

      <Text>Don't have an account?</Text>

      <Link
        to="Signup"
        onPress={(e) => {
          e.preventDefault();
          e.stopPropagation();

          navigation.navigate("Signup");
        }}
      >
        Sign Up
      </Link>
    </View>
  );
};

export default LoginScreen;

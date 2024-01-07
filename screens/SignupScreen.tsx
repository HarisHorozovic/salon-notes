import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Link } from "@react-navigation/native";
import { signup } from "../api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const token = await signup(email, password);

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
      <Button title="Sign up" onPress={handleSignup} />

      <Text>Already have an account?</Text>

      <Link
        to="Login"
        onPress={(e) => {
          e.preventDefault();
          e.stopPropagation();

          navigation.navigate("Login");
        }}
      >
        Log in
      </Link>
    </View>
  );
};

export default SignupScreen;

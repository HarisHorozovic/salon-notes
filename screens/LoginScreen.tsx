import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../api/auth";
import { Link } from "@react-navigation/native";
import styles from "../styles";
import CustomButton from "../components/CustomButton";
import AppLayout from "../components/HOC/AppLayout";

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
      alert("Invalid email or password");
    }
  };

  return (
    <AppLayout hideNavigation>
      <View
        style={{
          flex: 1,
          marginBottom: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.card}>
          <TextInput
            style={styles.input_base}
            placeholder="Email"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input_base}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <CustomButton label="Login" onPress={handleLogin} color="primary" />

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text>Don't have an account?</Text>

            <Link
              style={styles.link}
              to="Signup"
              onPress={(e) => {
                e.preventDefault();
                e.stopPropagation();

                navigation.navigate("Signup");
              }}
            >
              {" "}
              Sign Up
            </Link>
          </View>
        </View>
      </View>
    </AppLayout>
  );
};

export default LoginScreen;

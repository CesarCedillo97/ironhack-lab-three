import React, { useState } from "react";
import { LoginPresenter, LoginView } from "../presenter/LoginPresenter";
import { UserService } from "../model/UserService";
import { Button, Text, TextInput, View } from "react-native";

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userService = new UserService();

  const presenter = new LoginPresenter(userService, {
    showSuccess: () => alert("Login successful!"),
    showError: () => alert("Login failed!"),
  });

  return (
    <View>
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button
        title="Login"
        onPress={() => presenter.login(username, password)}
      />
    </View>
  );
};

export default LoginScreen;

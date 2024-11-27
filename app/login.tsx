import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigationHandlers } from "@/hooks/useNavigationHandlers";
import {
  StyledView,
  StyledText,
  StyledOpacity,
} from "@/components/styledComponents";
import { LoginInput, PasswordInput } from "@/components/TextInputs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { loginWithEmailAndPassword } from "@/components/firebase/firebaseAuth";

const Login = () => {
  const { handleRouteHome, handleRouteRegister } = useNavigationHandlers();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await loginWithEmailAndPassword(email, password);
      Alert.alert("Sukces", `Zalogowano jako: ${user.email}`);
      handleRouteHome();
    } catch (error) {
      Alert.alert("Błąd", "Nieprawidłowe dane logowania.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#181A1A" }}
    >
      <StyledView className="flex-1 justify-center px-6">
        <MaterialCommunityIcons
          name="book-open-page-variant"
          size={60}
          color="#CDE7BE"
          style={{ alignSelf: "center", marginBottom: 20 }}
        />

        <StyledText className="text-gray-300 text-3xl font-semibold mb-4 text-center">
          Zaloguj się
        </StyledText>
        <StyledText className="text-white text-center font-sniglet mb-8 text-4xl">
          wolne<StyledText className="text-button-primary">lektury</StyledText>
          .pl
        </StyledText>

        <LoginInput
          value={email}
          label="Email"
          placeholder="Podaj swój email"
          onChangeText={setEmail}
        />

        <PasswordInput
          value={password}
          onChangeText={setPassword}
          placeholder="Hasło"
          label="Hasło"
        />

        <StyledOpacity
          onPress={handleLogin}
          className="border-2 border-white py-3 px-5 mt-2 rounded-lg flex-row justify-center items-center shadow-lg"
        >
          <StyledText className="text-white font-semibold text-lg">
            Zaloguj się
          </StyledText>
        </StyledOpacity>

        <StyledView className="flex-row justify-center items-center mt-8">
          <StyledText className="text-gray-400 mr-2">
            Nie masz konta?
          </StyledText>
          <StyledOpacity onPress={handleRouteRegister}>
            <StyledText className="text-button-primary underline">
              Zarejestruj się
            </StyledText>
          </StyledOpacity>
        </StyledView>
      </StyledView>
    </KeyboardAvoidingView>
  );
};

export default Login;

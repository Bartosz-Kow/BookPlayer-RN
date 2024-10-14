import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

export const LoginInput: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder = "Podaj swój email",
  label = "Email",
  keyboardType = "email-address",
}) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      mode="outlined"
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize="none"
      textColor="white"
      style={styles.input}
      underlineColor="white"
      activeOutlineColor="#CDE7BE"
      selectionColor="#CDE7BE"
      outlineColor="white"
      outlineStyle={{ borderWidth: 2 }}
    />
  );
};

export const PasswordInput: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder = "Podaj swoje hasło",
  label = "Hasło",
  secureTextEntry = true,
}) => {
  return (
    <TextInput
      label={label}
      textColor="white"
      mode="outlined"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      underlineColor="white"
      activeOutlineColor="#CDE7BE"
      selectionColor="#CDE7BE"
      outlineColor="white"
      outlineStyle={{ borderWidth: 2 }}
      right={<TextInput.Icon icon="eye" color="white" />}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#181A1A",
    color: "#FFFFFF",
    marginBottom: 16,
    borderRadius: 4,
  },
});

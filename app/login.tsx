import { useRouter } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Login = () => {
  const StyledView = styled(View);
  const StyledText = styled(Text);
  const router = useRouter();

  const handleRouteHome = () => {
    router.push("/(tabs)");
  };
  return (
    <StyledView className="bg-background flex-1 justify-center items-center ">
      <TouchableOpacity onPress={handleRouteHome}>
        <StyledText className="text-lg text-blue-900">LOGIN</StyledText>
      </TouchableOpacity>
    </StyledView>
  );
};

const styles = StyleSheet.create({});

export default Login;

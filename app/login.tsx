import { useRouter } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigationHandlers } from "@/hooks/useNavigationHandlers";

const Login = () => {
  const { handleRouteHome } = useNavigationHandlers();
  const StyledView = styled(View);
  const StyledText = styled(Text);

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

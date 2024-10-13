import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";
import Header from "@/components/Header";

const StyledView = styled(View);

const Index = () => {
  return (
    <StyledView className="bg-background flex-1">
      <Header />
    </StyledView>
  );
};

export default Index;

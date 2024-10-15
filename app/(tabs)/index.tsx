import React from "react";
import Header from "@/components/Header";
import { StyledView } from "@/components/styledComponents";
import AuthorList from "@/components/HomeComponents/AuthorList";
import DonateImage from "@/components/HomeComponents/DonateImage";
import { ScrollView } from "react-native";

const Index = () => {
  return (
    <StyledView className="bg-background flex-1">
      <Header />
      <ScrollView>
        <AuthorList />
        <DonateImage />
      </ScrollView>
    </StyledView>
  );
};

export default Index;

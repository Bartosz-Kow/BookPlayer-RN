import React from "react";
import Header from "@/components/Header";
import { StyledView } from "@/components/styledComponents";
import AuthorList from "@/components/HomeComponents/AuthorList";
import DonateImage from "@/components/HomeComponents/DonateImage";

const Index = () => {
  return (
    <StyledView className="bg-background flex-1">
      <Header />
      <AuthorList />
      <DonateImage />
    </StyledView>
  );
};

export default Index;

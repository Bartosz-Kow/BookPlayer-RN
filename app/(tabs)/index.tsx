import React from "react";
import Header from "@/components/Header";
import { StyledView } from "@/components/styledComponents";

import AuthorList from "@/components/HomeComponents/AuthorList";

const Index = () => {
  return (
    <StyledView className="bg-background flex-1">
      <Header />
      <AuthorList />
    </StyledView>
  );
};

export default Index;

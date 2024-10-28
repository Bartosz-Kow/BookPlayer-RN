import React from "react";
import { StyledView } from "@/components/styledComponents";
import { Searchbar } from "react-native-paper";

const Explore = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <StyledView className="bg-background flex-1">
      <StyledView className="mt-10 px-5">
        <Searchbar
          placeholder="Szukaj audiobooków i książek"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            backgroundColor: "#181A1A",
            borderWidth: 1,
            borderColor: "#CDE7BE",
          }}
          iconColor="#5F5F5F"
          inputStyle={{ color: "#5F5F5F" }}
          placeholderTextColor={"#5F5F5F"}
        />
      </StyledView>
    </StyledView>
  );
};

export default Explore;

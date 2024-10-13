import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styled } from "nativewind";
import { Avatar } from "react-native-paper";

const StyledView = styled(View);
const StyledText = styled(Text);

const Header = () => {
  return (
    <SafeAreaView>
      <StyledView className="bg-background border border-white w-full h-14 flex flex-row justify-between items-center mt-8 px-4">
        <StyledText className="text-white font-bold text-xl">
          {" "}
          wolnelektury.pl
        </StyledText>
        <Avatar.Icon
          size={39}
          icon="account"
          color="#181A1A"
          style={{ backgroundColor: "#CDE7BE" }}
        />
      </StyledView>
    </SafeAreaView>
  );
};

export default Header;

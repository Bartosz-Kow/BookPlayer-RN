import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styled } from "nativewind";
import { Avatar } from "react-native-paper";
import { useLoadFonts } from "@/hooks/useLoadFonts";

const StyledView = styled(View);
const StyledText = styled(Text);

const Header = () => {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <StyledView className="bg-background  w-full h-14 flex flex-row justify-between items-center mt-8 px-4">
        <StyledText className="text-white font-sniglet text-3xl">
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

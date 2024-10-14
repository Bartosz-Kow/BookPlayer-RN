import React from "react";
import { StyleSheet, Image, Linking } from "react-native";
import { StyledOpacity, StyledText, StyledView } from "../styledComponents";

const DonateImage = () => {
  const handlePress = () => {
    Linking.openURL(
      "https://wolnelektury.pl/pomagam/?pk_campaign=karuzela-2023-11"
    );
  };
  return (
    <StyledOpacity onPress={handlePress}>
      <StyledView className="w-full h-[140px] justify-center items-center rounded-lg overflow-hidden">
        <Image
          source={require("../../assets/images/banner.webp")}
          style={[styles.bannerImage, { opacity: 0.3 }]}
          resizeMode="cover"
        />
        <StyledText className="text-white text-center text-lg font-candal">
          WSPIERAJ WOLNE LEKTURY
        </StyledText>
        <StyledText className="text-[#CDE7BE] text-center text-sm font-candal">
          DORZUC SIĘ!
        </StyledText>
      </StyledView>
    </StyledOpacity>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});

export default DonateImage;

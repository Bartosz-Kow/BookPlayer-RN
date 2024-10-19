import React from "react";
import { StyleSheet } from "react-native";
import { StyledOpacity, StyledView, StyledText } from "./styledComponents";
import { Icon } from "react-native-paper";
import Slider from "@react-native-community/slider";
import { useLocalSearchParams } from "expo-router";

const BottomBook = () => {
  const { title, author } = useLocalSearchParams();
  return (
    <>
      <StyledView className="flex-start items-start w-full px-4 sm:px-6 lg:px-8">
        <StyledText className="font-candal text-white text-base sm:text-lg lg:text-xl">
          {title}
        </StyledText>
        <StyledText className="font-baskerville text-white text-sm sm:text-base lg:text-lg">
          {author}
        </StyledText>
      </StyledView>
      <StyledView className="w-full px-4">
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#EAF4F4"
          maximumTrackTintColor="#777"
          thumbTintColor="#EAF4F4"
        />
      </StyledView>

      <StyledView className="flex-row justify-between items-center w-full px-4">
        {[
          "skip-previous",
          "rewind-10",
          "play",
          "fast-forward-10",
          "skip-next",
        ].map((icon, index) => (
          <StyledOpacity
            key={index}
            className="rounded-full p-2 flex-1 items-center"
          >
            <Icon source={icon} size={30} color="#EAF4F4" />
          </StyledOpacity>
        ))}
      </StyledView>

      <StyledText className="text-right text-xs mt-2 w-full px-4 text-white">
        1.0x
      </StyledText>
    </>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 40,
  },
});

export default BottomBook;
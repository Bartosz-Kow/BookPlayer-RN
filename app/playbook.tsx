import React from "react";
import { Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { StyledText, StyledView } from "@/components/styledComponents";
import BottomBook from "@/components/bottomBook";
import UpsideBook from "@/components/upsideBook";

const Playbook: React.FC = () => {
  const { cover } = useLocalSearchParams();
  const coverUri = Array.isArray(cover) ? cover[0] : cover;

  return (
    <StyledView className="flex-1 justify-between p-2 bg-[#181A1A]">
      <UpsideBook />
      <StyledView className="w-full h-96 relative justify-center items-center bg-[#282828] rounded-b-2xl mt-5 pt-5">
        {coverUri ? (
          <>
            <Image source={{ uri: coverUri }} style={styles.coverImage} />
            <Image
              source={{ uri: coverUri }}
              style={styles.innerImage}
              resizeMode="contain"
            />
          </>
        ) : (
          <StyledText>No cover available</StyledText>
        )}
      </StyledView>
      <BottomBook />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: "100%",
    height: "100%",
    opacity: 0.2,
    position: "absolute",
    top: 0,
    left: 0,
  },
  innerImage: {
    width: "70%",
    height: "90%",
    borderRadius: 15,
    position: "absolute",
    top: "5%",
    left: "15%",
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
});

export default Playbook;

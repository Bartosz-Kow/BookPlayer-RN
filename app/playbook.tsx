import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { StyledText } from "@/components/styledComponents";
import BottomBook from "@/components/bottomBook";
import UpsideBook from "@/components/upsideBook";
const Playbook: React.FC = () => {
  const { cover } = useLocalSearchParams();

  const coverUri = Array.isArray(cover) ? cover[0] : cover;

  return (
    <View style={styles.container}>
      <UpsideBook />
      <View style={styles.imageContainer}>
        {coverUri ? (
          <>
            <Image source={{ uri: coverUri }} style={styles.coverImage} />
            <Image
              source={{ uri: coverUri }}
              style={styles.innerImage}
              resizeMode="contain"
            />
            {console.log(coverUri)}
          </>
        ) : (
          <StyledText>No cover available</StyledText>
        )}
      </View>
      <BottomBook />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    backgroundColor: "#181A1A",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
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

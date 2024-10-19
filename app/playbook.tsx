import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { StyledText } from "@/components/styledComponents";

const Playbook = () => {
  const { cover, bookSlug } = useLocalSearchParams();

  const coverUri = Array.isArray(cover) ? cover[0] : cover;

  return (
    <View>
      {coverUri ? (
        <Image
          source={{ uri: coverUri }}
          style={{ width: "100%", height: 300, alignSelf: "center" }}
        />
      ) : (
        <StyledText>No cover available</StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Playbook;

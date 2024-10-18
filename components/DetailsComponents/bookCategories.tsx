import React from "react";
import { StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
import { StyledText, StyledView } from "../styledComponents";
import { useLocalSearchParams } from "expo-router";

const BookCategories = () => {
  const { epoch, kinds, genre } = useLocalSearchParams();

  return (
    <StyledView className="flex-row mt-1 ml-2 mb-2">
      <Chip style={styles.chip} mode="outlined">
        <StyledText className="font-abhaya" style={styles.chipText}>
          {epoch}
        </StyledText>
      </Chip>
      <Chip style={styles.chip} mode="outlined">
        <StyledText className="font-abhaya" style={styles.chipText}>
          {kinds}
        </StyledText>
      </Chip>
      {genre && (
        <Chip style={styles.chip} mode="outlined">
          <StyledText className="font-abhaya" style={styles.chipText}>
            {genre}
          </StyledText>
        </Chip>
      )}
    </StyledView>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginHorizontal: 5,
    backgroundColor: "#313333",
  },
  chipText: {
    color: "#FFF",
  },
});

export default BookCategories;

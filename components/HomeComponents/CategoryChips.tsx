import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Chip } from "react-native-paper";
import { StyledText, StyledView } from "../styledComponents";

export const CategoryChips = () => {
  return (
    <StyledView className="flex-row mt-1 ml-2 mb-2">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Chip icon="fire" style={styles.chip} mode="outlined">
          <StyledText className="font-abhaya color-white">
            Wolne książki
          </StyledText>
        </Chip>
        <Chip icon="skull" style={styles.chip} mode="outlined">
          <StyledText className="font-abhaya color-white">
            Antologia Poetki Zagłady
          </StyledText>
        </Chip>
        <Chip icon="bird" style={styles.chip} mode="outlined">
          <StyledText className="font-abhaya color-white">
            Baśnie, bajki, bajeczki
          </StyledText>
        </Chip>
        <Chip icon="pillar" style={styles.chip} mode="outlined">
          <StyledText className="font-abhaya color-white">
            Biblioteczka antyczna
          </StyledText>
        </Chip>
      </ScrollView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginHorizontal: 10,
    backgroundColor: "#181A1A",
  },
  selectedChip: {
    backgroundColor: "#CDE7BE",
  },
});

export default CategoryChips;

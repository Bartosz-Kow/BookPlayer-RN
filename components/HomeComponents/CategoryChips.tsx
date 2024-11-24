import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Chip } from "react-native-paper";
import { StyledText, StyledView } from "../styledComponents";

export const CategoryChips = () => {
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const handleChipClick = (chip: string) => {
    setSelectedChip(chip === selectedChip ? null : chip);
  };

  return (
    <StyledView className="flex-row mt-1 ml-2 mb-2">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Chip
          icon="book"
          style={[
            styles.chip,
            selectedChip === "Wszystkie" && styles.selectedChip,
          ]}
          mode="outlined"
          onPress={() => handleChipClick("Wszystkie")}
        >
          <StyledText
            className="font-abhaya"
            style={
              selectedChip === "Wszystkie"
                ? styles.selectedText
                : styles.defaultText
            }
          >
            Wszystkie
          </StyledText>
        </Chip>
        <Chip
          icon="fire"
          style={[
            styles.chip,
            selectedChip === "wolne_ksiazki" && styles.selectedChip,
          ]}
          mode="outlined"
          onPress={() => handleChipClick("wolne_ksiazki")}
        >
          <StyledText
            className="font-abhaya"
            style={
              selectedChip === "wolne_ksiazki"
                ? styles.selectedText
                : styles.defaultText
            }
          >
            Wolne książki
          </StyledText>
        </Chip>
        <Chip
          icon="skull"
          style={[
            styles.chip,
            selectedChip === "antologia_poetki" && styles.selectedChip,
          ]}
          mode="outlined"
          onPress={() => handleChipClick("antologia_poetki")}
        >
          <StyledText
            className="font-abhaya"
            style={
              selectedChip === "antologia_poetki"
                ? styles.selectedText
                : styles.defaultText
            }
          >
            Antologia Poetki Zagłady
          </StyledText>
        </Chip>
        <Chip
          icon="bird"
          style={[
            styles.chip,
            selectedChip === "basnie" && styles.selectedChip,
          ]}
          mode="outlined"
          onPress={() => handleChipClick("basnie")}
        >
          <StyledText
            className="font-abhaya"
            style={
              selectedChip === "basnie"
                ? styles.selectedText
                : styles.defaultText
            }
          >
            Baśnie, bajki, bajeczki
          </StyledText>
        </Chip>
        <Chip
          icon="pillar"
          style={[
            styles.chip,
            selectedChip === "biblioteczka" && styles.selectedChip,
          ]}
          mode="outlined"
          onPress={() => handleChipClick("biblioteczka")}
        >
          <StyledText
            className="font-abhaya"
            style={
              selectedChip === "biblioteczka"
                ? styles.selectedText
                : styles.defaultText
            }
          >
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
  defaultText: {
    color: "white",
  },
  selectedText: {
    color: "#181A1A",
  },
});

export default CategoryChips;

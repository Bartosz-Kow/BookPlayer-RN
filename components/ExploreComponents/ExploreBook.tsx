import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StyledText } from "../styledComponents";

interface ExploreBookItemProps {
  title: string;
  author: string;
  cover: string;
  onPress?: () => void;
}

const ExploreBookItem: React.FC<ExploreBookItemProps> = ({
  title,
  author,
  cover,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: cover }} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <StyledText
          numberOfLines={2}
          className="text-left mb-1 font-baskervill text-[#595353] text-sm max-w-[120px]"
        >
          {author}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#232323",
  },
  coverImage: {
    width: 60,
    height: 90,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#CDE7BE",
  },
});

export default ExploreBookItem;

import React, { useState } from "react";
import { FlatList, View, Image, StyleSheet } from "react-native";
import { StyledOpacity, StyledText, StyledView } from "../styledComponents";
import { authors } from "@/components/authors";

type AuthorProps = {
  name: string;
  image: any;
};

const Author = ({ name, image }: AuthorProps) => {
  const [borderColor, setBorderColor] = useState("#313333");

  const handlePress = () => {
    setBorderColor((prevColor) =>
      prevColor === "#313333" ? "#CDE7BE" : "#313333"
    );
  };

  return (
    <StyledView className="items-center mx-2 mt-2 mb-2">
      <StyledOpacity
        onPress={handlePress}
        className={`border rounded-full p-[3px]`}
        style={{ borderColor }}
      >
        <Image source={image} style={styles.avatar} />
      </StyledOpacity>
      <StyledText className="font-abhaya text-text-secondary text-xs mt-1">
        {name}
      </StyledText>
    </StyledView>
  );
};

const AuthorList = () => {
  return (
    <View>
      <FlatList
        data={authors}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Author name={item.name} image={item.image} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default AuthorList;

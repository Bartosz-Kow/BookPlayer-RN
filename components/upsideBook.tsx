import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Icon } from "react-native-paper";
import { StyledOpacity, StyledView } from "./styledComponents";

const UpsideBook: React.FC = () => {
  const [isFavorite, setFavorite] = useState<boolean>(false);
  const router = useRouter();

  return (
    <StyledView className="flex-row justify-between absolute top-12 left-5 right-5 z-10">
      <StyledOpacity
        className="w-10 h-10 items-center justify-center"
        onPress={() => router.back()}
      >
        <Icon source="arrow-left-circle-outline" size={40} color="#CDE7BE" />
      </StyledOpacity>
      <StyledOpacity
        className="w-10 h-10 items-center justify-center"
        onPress={() => setFavorite((prev) => !prev)}
      >
        <Icon
          source="heart-circle-outline"
          size={40}
          color={isFavorite ? "red" : "#CDE7BE"}
        />
      </StyledOpacity>
    </StyledView>
  );
};

export default UpsideBook;

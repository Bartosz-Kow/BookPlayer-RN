import React from "react";
import { Image } from "react-native";
import { StyledText, StyledView, StyledOpacity } from "../styledComponents";

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
    <StyledOpacity
      className="flex-row p-3 mb-4 rounded-lg bg-[#232323]"
      onPress={onPress}
    >
      <Image
        source={{ uri: cover }}
        style={{ width: 60, height: 90, borderRadius: 5 }}
      />
      <StyledView className="flex-1 ml-3 justify-center">
        <StyledText className="text-lg font-candal text-button-primary">
          {title}
        </StyledText>
        <StyledText
          numberOfLines={2}
          className="text-left mb-1 font-baskervill text-[#595353] text-sm max-w-[120px]"
        >
          {author}
        </StyledText>
      </StyledView>
    </StyledOpacity>
  );
};

export default ExploreBookItem;

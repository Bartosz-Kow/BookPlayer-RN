import React from "react";
import { Image } from "react-native";
import {
  StyledView,
  StyledText,
  StyledOpacity,
} from "@/components/styledComponents";
import { router } from "expo-router";

interface BookItemProps {
  title: string;
  author: string;
  cover: string;
  slug: string;
}

const BookItem: React.FC<BookItemProps> = ({ title, author, cover, slug }) => {
  return (
    <StyledView className="items-center mx-[10px] mb-4">
      <StyledOpacity
        onPress={() =>
          router.push({
            pathname: "/bookdetails",
            params: { slug, title, author, cover },
          })
        }
      >
        <Image
          source={{ uri: cover }}
          style={{ width: 120, height: 180, marginTop: 10 }}
          resizeMode="cover"
        />
      </StyledOpacity>
      <StyledText
        numberOfLines={1}
        className="text-left mb-1 font-baskervill text-[#595353] text-sm max-w-[120px]"
      >
        {author}
      </StyledText>
      <StyledText
        className="text-center font-candal text-white text-xs max-w-[120px]"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </StyledText>
    </StyledView>
  );
};

export default BookItem;

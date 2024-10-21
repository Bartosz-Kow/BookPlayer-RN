import React, { useEffect, useState } from "react";
import { Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import {
  StyledOpacity,
  StyledText,
  StyledView,
} from "@/components/styledComponents";
import { useLocalSearchParams } from "expo-router";
import { fetchBookDetails } from "@/components/API/fetchBookList";
import { Icon } from "react-native-paper";
import MediaList from "@/components/DetailsComponents/MediaList";
import BookCategories from "@/components/DetailsComponents/bookCategories";
import { useRouter } from "expo-router";

interface MediaItem {
  url: string;
  director: string;
  type: string;
  name: string;
  artist: string;
}

interface Book {
  title: string;
  cover: string;
  authors: { name: string }[];
  epoch: string;
  kinds: string[];
  translators: { name: string }[];
  fragment_data: {
    html: string;
  };
  media: MediaItem[];
}

const BookDetails = () => {
  const { bookSlug } = useLocalSearchParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadBookDetails = async () => {
      try {
        const bookDetails = await fetchBookDetails(bookSlug as string);
        console.log("Book details:", bookDetails);
        setBook(bookDetails);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadBookDetails();
  }, [bookSlug]);

  const handleBookPress = () => {
    router.push({
      pathname: "/readbook",
      params: { bookSlug },
    });
  };

  const handleAudiobookPress = () => {
    if (book && book.cover) {
      router.push({
        pathname: "/playbook",
        params: {
          bookSlug,
          cover: book.cover,
          title: book.title,
          author: book.authors[0]?.name,
        },
      });
    }
  };

  const handlePlayPress = (url: string) => {
    console.log(`Playing media from URL: ${url}`);
  };

  if (loading) {
    return (
      <StyledView className="bg-background flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#CDE7BE" />
      </StyledView>
    );
  }

  if (!book) {
    return (
      <StyledView className="bg-background flex-1 justify-center items-center">
        <Text style={{ color: "red" }}>Book details not found.</Text>
      </StyledView>
    );
  }

  const mp3Media = book.media.filter((item) => item.type === "mp3");

  return (
    <StyledView className="bg-background flex-1">
      <StyledView className="w-full h-72 rounded-b-2xl overflow-hidden mb-5 shadow-md">
        <Image
          source={{ uri: book.cover }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </StyledView>

      <StyledView className="flex-row justify-center mt-5">
        <StyledOpacity
          onPress={handleBookPress}
          className="p-4 bg-[#CDE7BE] rounded-lg mx-1 flex-row items-center shadow-md"
        >
          <Icon source="book-open-outline" size={20} color="#000" />
          <StyledText className="text-black font-bold mx-1 text-center">
            KSIĄŻKA
          </StyledText>
        </StyledOpacity>

        <StyledOpacity
          onPress={handleAudiobookPress}
          className="p-4 bg-[#CDE7BE] rounded-lg mx-1 flex-row items-center shadow-md"
        >
          <Icon source="headphones" size={20} color="#000" />
          <StyledText className="text-black font-bold mx-1 text-center">
            Audiobook
          </StyledText>
        </StyledOpacity>
      </StyledView>

      <StyledText className="text-center text-white font-candal text-2xl mt-4">
        {book.title}
      </StyledText>
      <StyledText className="text-center text-white text-lg">
        {book.authors[0]?.name}
      </StyledText>

      <BookCategories />
      <MediaList
        mediaData={mp3Media}
        onPlayPress={handlePlayPress}
        bookData={book.cover}
      />
    </StyledView>
  );
};

export default BookDetails;

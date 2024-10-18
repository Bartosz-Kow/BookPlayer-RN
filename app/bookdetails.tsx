// BookDetails.tsx
import React, { useEffect, useState } from "react";
import { Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { StyledText, StyledView } from "@/components/styledComponents";
import { useLocalSearchParams } from "expo-router";
import { fetchBookDetails } from "@/components/API/fetchBookList";
import { Icon } from "react-native-paper";
import MediaList from "@/components/DetailsComponents/MediaList";

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
  author: string;
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

  useEffect(() => {
    const loadBookDetails = async () => {
      try {
        const bookDetails = await fetchBookDetails(bookSlug as string);
        console.log("Pełne szczegóły książki:", bookDetails);
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
    console.log("Książka została wybrana");
  };

  const handleAudiobookPress = () => {
    console.log("Audiobook został wybrany");
  };

  const handlePlayPress = (url: string) => {
    console.log(`Odtwarzam media z URL: ${url}`);
    // Tutaj możesz dodać logikę odtwarzania
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
        <Text style={{ color: "red" }}>Nie znaleziono szczegółów książki.</Text>
      </StyledView>
    );
  }

  const mp3Media = book.media.filter((item) => item.type === "mp3");

  return (
    <StyledView className="bg-background flex-1">
      <Image
        source={{ uri: book.cover }}
        style={{ width: "100%", height: 300, alignSelf: "center" }}
      />
      <StyledView
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={handleBookPress}
          style={{
            padding: 15,
            backgroundColor: "#CDE7BE",
            borderRadius: 5,
            marginHorizontal: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon source="book" size={20} color="#000" />
          <Text style={{ marginLeft: 5, color: "#000" }}>Książka</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleAudiobookPress}
          style={{
            padding: 15,
            backgroundColor: "#CDE7BE",
            borderRadius: 5,
            marginHorizontal: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon source="headphones" size={20} color="#000" />
          <Text style={{ marginLeft: 5, color: "#000" }}>Audiobook</Text>
        </TouchableOpacity>
      </StyledView>

      <StyledText className="text-center text-white">{book.author}</StyledText>
      <StyledText className="text-center text-white">
        {book.kinds.join(", ")}
      </StyledText>
      <StyledText className="text-center text-white">{book.epoch}</StyledText>
      <StyledText className="text-center text-white">{book.title}</StyledText>
      <StyledText className="text-center text-white">
        Krótko o książce
      </StyledText>

      <MediaList mediaData={mp3Media} onPlayPress={handlePlayPress} />
    </StyledView>
  );
};

export default BookDetails;

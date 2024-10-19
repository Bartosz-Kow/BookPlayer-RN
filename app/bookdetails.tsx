import React, { useEffect, useState } from "react";
import { Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { StyledText, StyledView } from "@/components/styledComponents";
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
  authors: { name: string }[]; // Zmienione z author na authors
  epoch: string;
  kinds: string[];
  translators: { name: string }[];
  fragment_data: {
    html: string;
  };
  media: MediaItem[];
}

const BookDetails = () => {
  const { bookSlug } = useLocalSearchParams(); // Usuń author z tu
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
          author: book.authors[0]?.name, // Użycie autora z book
        },
      });
    }
  };

  const handlePlayPress = (url: string) => {
    console.log(`Odtwarzam media z URL: ${url}`);
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
            width: "49%",
          }}
        >
          <Icon source="book" size={20} color="#000" />
          <StyledText className="text-black font-bold m-1 text-center">
            KSIĄŻKA
          </StyledText>
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
            width: "49%",
          }}
        >
          <Icon source="headphones" size={20} color="#000" />
          <StyledText className="text-black font-bold m-1 text-center">
            Audiobook
          </StyledText>
        </TouchableOpacity>
      </StyledView>

      <StyledText className="text-center text-white font-candal text-xl">
        {book.title}
      </StyledText>
      <StyledText className="text-center text-white">
        {book.authors[0]?.name}
      </StyledText>
      <BookCategories />
      <MediaList mediaData={mp3Media} onPlayPress={handlePlayPress} />
    </StyledView>
  );
};

export default BookDetails;

import React, { useEffect, useState } from "react";
import { Image, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { StyledText, StyledView } from "@/components/styledComponents";
import { useLocalSearchParams } from "expo-router";
import { fetchBookDetails } from "@/components/API/fetchBookList";
import { Icon } from "react-native-paper";

interface Book {
  title: string;
  cover: string;
  author: string;
}

const BookDetails = () => {
  const { bookSlug, author } = useLocalSearchParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBookDetails = async () => {
      try {
        const bookDetails = await fetchBookDetails(bookSlug as string);
        console.log(bookDetails);
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

      <StyledText className="text-center text-white">{author}</StyledText>
      <StyledText className="text-center text-white">{book.title}</StyledText>
      <StyledText className="text-center text-white">
        Krótko o książce
      </StyledText>
    </StyledView>
  );
};

export default BookDetails;

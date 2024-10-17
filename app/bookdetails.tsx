import React, { useEffect, useState } from "react";
import { Image, Text, ActivityIndicator } from "react-native";
import { StyledView } from "@/components/styledComponents";
import { useLocalSearchParams } from "expo-router";
import { fetchBookDetails } from "@/components/API/fetchBookList";

// Typ dla książki
interface Author {
  name: string;
}

interface Book {
  title: string;
  cover: string;
  authors: Author[];
}

const BookDetails = () => {
  const { slug } = useLocalSearchParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBookDetails = async () => {
      try {
        const bookDetails = await fetchBookDetails(slug as string);
        setBook(bookDetails);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadBookDetails();
  }, [slug]);

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
    <StyledView className="bg-background flex-1 p-4">
      <Image
        source={{ uri: book.cover }}
        style={{ width: 200, height: 300, alignSelf: "center" }}
        resizeMode="contain"
      />

      <Text
        style={{
          color: "white",
          fontSize: 24,
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        {book.title}
      </Text>

      <Text style={{ color: "gray", fontSize: 18, textAlign: "center" }}>
        {book.authors && book.authors.length > 0
          ? book.authors[0].name
          : "Nieznany autor"}
      </Text>

      <Text
        style={{
          color: "#CDE7BE",
          fontSize: 16,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Slug: {slug}
      </Text>
    </StyledView>
  );
};

export default BookDetails;

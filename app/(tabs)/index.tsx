// src/components/HomeComponents/Index.tsx

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { StyledView } from "@/components/styledComponents";
import AuthorList from "@/components/HomeComponents/AuthorList";
import DonateImage from "@/components/HomeComponents/DonateImage";
import { ScrollView, FlatList } from "react-native";
import { fetchAllBooks } from "@/components/API/getBookList";
import BookItem from "@/components/HomeComponents/BookItem";

const Index: React.FC = () => {
  const [booksData, setBooksData] = useState<any>({});

  useEffect(() => {
    const loadBooks = async () => {
      const results = await fetchAllBooks();
      setBooksData(results);
    };

    loadBooks();
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <BookItem
        title={item.title}
        author={item.author}
        cover={item.cover_thumb}
      />
    );
  };

  return (
    <StyledView className="bg-background flex-1">
      <Header />
      <ScrollView>
        <AuthorList />
        <DonateImage />

        {/* FlatList for Wolne Książki */}
        <FlatList
          data={booksData.wolneKsiazki}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
        />

        {/* FlatList for Poetki Zagłady */}
        <FlatList
          data={booksData.poetkiZaglady}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
        />

        {/* FlatList for Bajki Bajeczki */}
        <FlatList
          data={booksData.bajkiBajeczki}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
        />

        {/* FlatList for Biblioteczka Antyczna */}
        <FlatList
          data={booksData.biblioteczkaAntyczna}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
        />
      </ScrollView>
    </StyledView>
  );
};

export default Index;

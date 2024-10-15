import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { StyledText, StyledView } from "@/components/styledComponents";
import AuthorList from "@/components/HomeComponents/AuthorList";
import DonateImage from "@/components/HomeComponents/DonateImage";
import { ScrollView, FlatList } from "react-native";
import { fetchAllBooks } from "@/components/API/getBookList";
import BookItem from "@/components/HomeComponents/BookItem";
import CategoryChips from "@/components/HomeComponents/CategoryChips";

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
        <CategoryChips />
        <DonateImage />
        <StyledText className="font-sniglet text-center color-text-primary text-base">
          Wolne książki na cały rok do słuchania
        </StyledText>
        <FlatList
          data={booksData.wolneKsiazki}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
        />
        <StyledText className="font-sniglet text-center color-text-primary text-base">
          Antologia Poetki Zagłady
        </StyledText>
        <FlatList
          data={booksData.poetkiZaglady}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
        />
        <StyledText className="font-sniglet text-center color-text-primary text-base">
          Baśnie, bajki, bajeczki
        </StyledText>

        <FlatList
          data={booksData.bajkiBajeczki}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
        />
        <StyledText className="font-sniglet text-center color-text-primary text-base">
          Biblioteczka antyczna
        </StyledText>
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

import React, { useState, useEffect } from "react";
import { StyledView, StyledText } from "@/components/styledComponents";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { FlatList, ListRenderItem } from "react-native";
import ExploreBookItem from "@/components/ExploreComponents/ExploreBook";
import { fetchAllBooks } from "@/components/API/getBookList";

interface Book {
  title: string;
  author: string;
  cover_thumb: string;
  slug: string;
  epoch: string;
  kind: string;
  genre: string;
}

const Explore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBooks = async () => {
      const results = await fetchAllBooks();
      const combinedBooks: Book[] = [
        ...results.wolneKsiazki,
        ...results.poetkiZaglady,
        ...results.bajkiBajeczki,
        ...results.biblioteczkaAntyczna,
      ];
      setAllBooks(combinedBooks);
      setFilteredBooks(combinedBooks);
      setIsLoading(false);
    };

    loadBooks();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredData = allBooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filteredData);
    } else {
      setFilteredBooks(allBooks);
    }
  }, [searchQuery, allBooks]);

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <ExploreBookItem
      title={item.title}
      author={item.author}
      cover={item.cover_thumb}
      onPress={() => console.log(`Otwieram książkę ${item.slug}`)}
    />
  );

  return (
    <StyledView className="bg-background flex-1">
      <StyledView className="mt-10 px-5">
        <Searchbar
          placeholder="Szukaj audiobooków i książek"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            backgroundColor: "#181A1A",
            borderWidth: 1,
            borderColor: "#CDE7BE",
          }}
          iconColor="#5F5F5F"
          inputStyle={{ color: "#5F5F5F" }}
          placeholderTextColor="#5F5F5F"
        />
      </StyledView>

      {isLoading ? (
        <ActivityIndicator
          animating={true}
          size="large"
          color="#CDE7BE"
          style={{ marginTop: 20 }}
        />
      ) : (
        <FlatList
          data={filteredBooks}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 20 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <StyledText className="text-center color-text-primary mt-10">
              Brak wyników wyszukiwania
            </StyledText>
          }
        />
      )}
    </StyledView>
  );
};

export default Explore;

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { StyledText, StyledView } from "@/components/styledComponents";
import AuthorList from "@/components/HomeComponents/AuthorList";
import DonateImage from "@/components/HomeComponents/DonateImage";
import { ScrollView, FlatList } from "react-native";
import { fetchAllBooks } from "@/components/API/getBookList";
import BookItem from "@/components/HomeComponents/BookItem";
import CategoryChips from "@/components/HomeComponents/CategoryChips";
import { ActivityIndicator } from "react-native-paper";

const Index: React.FC = () => {
  const [booksData, setBooksData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      const results = await fetchAllBooks();
      setBooksData(results);
      setIsLoading(false);
    };

    loadBooks();
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <BookItem
        title={item.title}
        author={item.author}
        cover={item.cover_thumb}
        bookSlug={item.slug}
        epoch={item.epoch}
        kinds={item.kind}
        genre={item.genre}
      />
    );
  };

  const handleChipClick = (chip: string | null) => {
    setSelectedCategory(chip);
  };

  const filterBooks = (category: string | null) => {
    if (!category || category === "Wszystkie") {
      return booksData;
    }

    const categoryMap: { [key: string]: string } = {
      wolne_ksiazki: "wolneKsiazki",
      antologia_poetki: "poetkiZaglady",
      basnie: "bajkiBajeczki",
      biblioteczka: "biblioteczkaAntyczna",
    };

    const filteredData: any = {};
    const key = categoryMap[category];
    if (key) {
      filteredData[key] = booksData[key];
    }

    return filteredData;
  };

  const filteredBooks = filterBooks(selectedCategory);

  return (
    <StyledView className="bg-background flex-1">
      <Header />
      <ScrollView>
        <AuthorList />
        <CategoryChips
          selectedChip={selectedCategory}
          handleChipClick={handleChipClick}
        />
        <DonateImage />

        {isLoading ? (
          <ActivityIndicator
            animating={true}
            size="large"
            color="#CDE7BE"
            style={{ marginTop: 20 }}
          />
        ) : (
          <>
            {filteredBooks.wolneKsiazki && (
              <>
                <StyledText className="font-sniglet text-center color-text-primary text-base">
                  Wolne książki na cały rok do słuchania
                </StyledText>
                <FlatList
                  data={filteredBooks.wolneKsiazki}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => `${item.slug}-${index}`}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 10 }}
                  horizontal
                />
              </>
            )}

            {filteredBooks.poetkiZaglady && (
              <>
                <StyledText className="font-sniglet text-center color-text-primary text-base">
                  Antologia Poetki Zagłady
                </StyledText>
                <FlatList
                  data={filteredBooks.poetkiZaglady}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => `${item.slug}-${index}`}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 10 }}
                  horizontal
                />
              </>
            )}

            {filteredBooks.bajkiBajeczki && (
              <>
                <StyledText className="font-sniglet text-center color-text-primary text-base">
                  Baśnie, bajki, bajeczki
                </StyledText>
                <FlatList
                  data={filteredBooks.bajkiBajeczki}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => `${item.slug}-${index}`}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 10 }}
                  horizontal
                />
              </>
            )}

            {filteredBooks.biblioteczkaAntyczna && (
              <>
                <StyledText className="font-sniglet text-center color-text-primary text-base">
                  Biblioteczka antyczna
                </StyledText>
                <FlatList
                  data={filteredBooks.biblioteczkaAntyczna}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => `${item.slug}-${index}`}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 10 }}
                  horizontal
                />
              </>
            )}
          </>
        )}
      </ScrollView>
    </StyledView>
  );
};

export default Index;

import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { StyledText, StyledView } from "@/components/styledComponents";
import { Icon } from "react-native-paper";
import { useRouter } from "expo-router";

interface Book {
  cover: string;
}
interface MediaItem {
  url: string;
  director: string;
  type: string;
  name: string;
  artist: string;
}

interface MediaListProps {
  mediaData: MediaItem[];
  bookData: string;
  onPlayPress: (url: string) => void;
}

const MediaList: React.FC<MediaListProps> = ({
  mediaData,
  onPlayPress,
  bookData,
}) => {
  const router = useRouter();

  const handleAudioBookPress = (item: MediaItem) => {
    console.log(item.url);
    router.push({
      pathname: "/playbook",
      params: {
        url: item.url,
        director: item.director,
        name: item.name,
        artist: item.artist,
        cover: bookData,
      },
    });
  };

  const renderMediaItem = ({ item }: { item: MediaItem }) => (
    <StyledView className="p-4 flex-row items-center justify-between bg-background">
      <StyledView className="flex-1">
        <StyledText className="text-white font-candal text-base text-center">
          {item.name}
        </StyledText>
        <StyledText className="text-white font-abhaya text-base">
          Reżyser: {item.director}
        </StyledText>
        <StyledText className="text-white font-abhaya text-base">
          Artysta: {item.artist}
        </StyledText>
      </StyledView>
      <TouchableOpacity
        onPress={() => handleAudioBookPress(item)}
        style={{
          padding: 10,
          backgroundColor: "#CDE7BE",
          borderRadius: 5,
          marginLeft: 10,
        }}
      >
        <Icon source="play" size={24} color="#000" />
      </TouchableOpacity>
    </StyledView>
  );

  return (
    <FlatList
      data={mediaData}
      renderItem={renderMediaItem}
      keyExtractor={(item) => item.url}
      contentContainerStyle={{ paddingVertical: 10 }}
    />
  );
};

export default MediaList;

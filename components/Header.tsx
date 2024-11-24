import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { styled } from "nativewind";
import { Avatar } from "react-native-paper";
import { useLoadFonts } from "@/hooks/useLoadFonts";
import * as ImagePicker from "expo-image-picker";

const StyledView = styled(View);
const StyledText = styled(Text);

const Header = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0].uri) {
      setImage(result.assets[0].uri);
    }
  };

  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <StyledView className="bg-background w-full h-14 flex flex-row justify-between items-center mt-8 px-4">
        <StyledText className="text-white font-sniglet text-3xl">
          wolne
          <StyledText className="text-button-primary font-sniglet text-3xl">
            lektury
          </StyledText>
          .pl
        </StyledText>
        <TouchableOpacity onPress={pickImage}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 39, height: 39, borderRadius: 20 }}
            />
          ) : (
            <Avatar.Icon
              size={39}
              icon="account"
              color="#181A1A"
              style={{ backgroundColor: "#CDE7BE" }}
            />
          )}
        </TouchableOpacity>
      </StyledView>
    </SafeAreaView>
  );
};

export default Header;

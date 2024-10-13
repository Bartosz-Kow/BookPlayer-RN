import { useFonts } from "expo-font";

export const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    "Sniglet-Regular": require("../assets/fonts/Sniglet-Regular.ttf"),
    "AbhayaLibre-Medium": require("../assets/fonts/AbhayaLibre-Medium.ttf"),
    "Baskervville-Italic": require("../assets/fonts/Baskervville-Italic.ttf"),
    "Candal-Regular": require("../assets/fonts/Candal-Regular.ttf"),
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return false;
  }

  return fontsLoaded;
};

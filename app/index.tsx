import { styled } from "nativewind";
import { Text, View, TouchableOpacity } from "react-native";
import { useLoadFonts } from "@/hooks/useLoadFonts";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledOpacity = styled(TouchableOpacity);

export default function Index() {
  const fontsLoaded = useLoadFonts();
  const router = useRouter();

  const handleRouteLogin = () => {
    router.push("/login");
  };

  const handleRouteRegister = () => {
    router.push("/register");
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StyledView className="bg-background flex-1 justify-center px-6 font-semibold">
      <StyledText className="text-gray-300" style={{ fontSize: 28 }}>
        Witamy!
      </StyledText>
      <StyledText
        className="text-white mt-1 font-sniglet"
        style={{
          fontSize: 38,
        }}
      >
        wolnelektury.pl
      </StyledText>
      <StyledText className="text-gray-400 text-center mt-3 text-base font-baskerville">
        W miejscu, gdzie możesz posłuchać audiobooków za darmo
      </StyledText>

      <StyledText className="text-gray-300 mt-4 text-sm font-semibold">
        Zaczynajmy...
      </StyledText>

      <StyledOpacity className="flex-row items-center border-2 border-white justify-center py-3 px-5 mt-6 rounded-lg">
        <FontAwesome size={25} name="google" color="white" />
        <StyledText className="text-white ml-3 font-semibold">
          Kontynuuj z Google
        </StyledText>
      </StyledOpacity>
      <StyledOpacity
        onPress={handleRouteRegister}
        className="flex-row items-center justify-center border-2 border-white py-3 px-5 mt-4 rounded-lg"
      >
        <FontAwesome size={25} name="user" color="white" />
        <StyledText className="text-white ml-3 font-semibold">
          Kontynuuj z email
        </StyledText>
      </StyledOpacity>

      <StyledView className="flex-row justify-center items-center mt-10">
        <StyledText className="text-gray-400 mr-2">Masz już konto?</StyledText>
        <TouchableOpacity onPress={handleRouteLogin}>
          <StyledText className="text-green-400 underline">
            Zaloguj się
          </StyledText>
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  );
}

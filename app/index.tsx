import { useLoadFonts } from "@/hooks/useLoadFonts";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigationHandlers } from "@/hooks/useNavigationHandlers";
import {
  StyledView,
  StyledText,
  StyledOpacity,
} from "@/components/styledComponents";

export default function Index() {
  const fontsLoaded = useLoadFonts();
  const { handleRouteLogin, handleRouteRegister } = useNavigationHandlers();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StyledView className="bg-background flex-1 justify-center px-6 }">
      <StyledText className="text-white mt-1 font-sniglet text-4xl">
        wolne<StyledText className="text-button-primary">lektury</StyledText>.pl
      </StyledText>
      <StyledText className="text-button-primary text-center mt-3 text-base text-xl font-baskerville">
        Miejsce, gdzie możesz posłuchać audiobooków za darmo
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
        <StyledOpacity onPress={handleRouteLogin}>
          <StyledText className="text-button-primary underline">
            Zaloguj się
          </StyledText>
        </StyledOpacity>
      </StyledView>
    </StyledView>
  );
}

import { styled } from "nativewind";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Index() {
  const router = useRouter();
  const handleRouteLogin = () => {
    router.push("/login");
  };
  const handleRouteRegister = () => {
    router.push("/register");
  };
  return (
    <StyledView className="bg-background flex-1 justify-center items-center ">
      <TouchableOpacity onPress={handleRouteLogin}>
        <StyledText className="text-lg text-blue-900">LOGIN</StyledText>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRouteRegister}>
        <StyledText className="text-lg text-blue-900">REGISTER</StyledText>
      </TouchableOpacity>
    </StyledView>
  );
}

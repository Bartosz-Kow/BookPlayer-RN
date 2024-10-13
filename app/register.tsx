import { styled } from "nativewind";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);
const Register = () => {
  const StyledView = styled(View);
  const StyledText = styled(Text);
  const router = useRouter();

  const handleRouteHome = () => {
    router.push("/(tabs)");
  };
  return (
    <StyledView className="bg-background flex-1 justify-center items-center ">
      <TouchableOpacity onPress={handleRouteHome}>
        <StyledText className="text-lg text-blue-900">REGISTER</StyledText>
      </TouchableOpacity>
    </StyledView>
  );
};

export default Register;

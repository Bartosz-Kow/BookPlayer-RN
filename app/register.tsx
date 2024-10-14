import { styled } from "nativewind";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigationHandlers } from "@/hooks/useNavigationHandlers";

const Register = () => {
  const StyledView = styled(View);
  const StyledText = styled(Text);
  const { handleRouteHome } = useNavigationHandlers();
  return (
    <StyledView className="bg-background flex-1 justify-center items-center ">
      <TouchableOpacity onPress={handleRouteHome}>
        <StyledText className="text-lg text-blue-900">REGISTER</StyledText>
      </TouchableOpacity>
    </StyledView>
  );
};

export default Register;

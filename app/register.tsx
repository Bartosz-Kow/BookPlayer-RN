import { useNavigationHandlers } from "@/hooks/useNavigationHandlers";
import {
  StyledView,
  StyledText,
  StyledOpacity,
} from "@/components/styledComponents";

const Register = () => {
  const { handleRouteHome } = useNavigationHandlers();
  return (
    <StyledView className="bg-background flex-1 justify-center items-center ">
      <StyledOpacity onPress={handleRouteHome}>
        <StyledText className="text-lg text-blue-900">REGISTER</StyledText>
      </StyledOpacity>
    </StyledView>
  );
};

export default Register;

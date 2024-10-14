import React from "react";
import { useNavigationHandlers } from "@/hooks/useNavigationHandlers";
import {
  StyledView,
  StyledText,
  StyledOpacity,
} from "@/components/styledComponents";

const Login = () => {
  const { handleRouteHome } = useNavigationHandlers();

  return (
    <StyledView className="bg-background flex-1 justify-center items-center ">
      <StyledOpacity onPress={handleRouteHome}>
        <StyledText className="text-lg text-blue-900">LOGIN</StyledText>
      </StyledOpacity>
    </StyledView>
  );
};

export default Login;

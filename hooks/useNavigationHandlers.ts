import { useRouter } from "expo-router";

export const useNavigationHandlers = () => {
  const router = useRouter();

  const handleRouteLogin = () => {
    router.push("/login");
  };

  const handleRouteRegister = () => {
    router.push("/register");
  };

  const handleRouteHome = () => {
    router.push("/(tabs)");
  };

  return {
    handleRouteLogin,
    handleRouteRegister,
    handleRouteHome,
  };
};

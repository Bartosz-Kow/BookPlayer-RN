import { styled } from "nativewind";
import { Text, View } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Index() {
  return (
    <StyledView className="flex-1 justify-center items-center bg-blue-100">
      <StyledText className="text-lg text-blue-900">
        Edit app/index.tsx to edit this screen.
      </StyledText>
    </StyledView>
  );
}

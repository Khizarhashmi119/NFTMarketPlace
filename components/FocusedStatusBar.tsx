import { useIsFocused } from "@react-navigation/native";
import { StatusBar, StatusBarStyle } from "react-native";

interface Props {
  backgroundColor: string;
  barStyle?: StatusBarStyle;
  translucent?: boolean;
}

const FocusedStatusBar = (props: Props): JSX.Element | null => {
  const { backgroundColor, barStyle, translucent } = props;
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={barStyle}
      translucent={translucent}
      animated
    />
  ) : null;
};

export default FocusedStatusBar;

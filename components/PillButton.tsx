import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

interface Props {
  handlePress?: () => void;
  minWidth: number;
}

const PillButton = (props: Props): JSX.Element => {
  const { minWidth, handlePress } = props;

  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          minWidth,
        },
      ]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>Place a bid</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    padding: SIZES.small,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.font,
    textAlign: "center",
  },
});

export default PillButton;

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const EndDate = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ending in</Text>
      <Text style={styles.endTime}>12h 30m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    justifyContent: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    ...SHADOWS.light,
    maxWidth: "50%",
  },
  title: {
    color: COLORS.primary,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
  },
  endTime: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
  },
});

export default EndDate;

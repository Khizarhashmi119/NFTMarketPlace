import { StyleSheet, View } from "react-native";

import EndDate from "./EndDate";
import People from "./People";

import { SIZES } from "../constants";

const SubInfo = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -SIZES.extraLarge,
    paddingHorizontal: SIZES.font,
    width: "100%",
  },
});

export default SubInfo;

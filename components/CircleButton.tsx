import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { COLORS, SIZES } from "../constants";

interface Props {
  imgSource: ImageSourcePropType;
  left?: number;
  right?: number;
  top?: number;
  handlePress?: () => void;
}

const CircleButton = (props: Props): JSX.Element => {
  const { imgSource, left, right, top, handlePress } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          left,
          right,
          top,
        },
      ]}
      onPress={handlePress}
    >
      <Image style={styles.image} source={imgSource} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.extraLarge,
    height: 40,
    justifyContent: "center",
    position: "absolute",
    width: 40,
  },
  image: {
    height: 24,
    width: 24,
  },
});

export default CircleButton;

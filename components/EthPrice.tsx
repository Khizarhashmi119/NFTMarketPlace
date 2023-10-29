import { Image, StyleSheet, Text, View } from "react-native";

import { assets, COLORS, FONTS, SIZES } from "../constants";

interface Props {
  price: number;
}

const EthPrice = (props: Props): JSX.Element => {
  const { price } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={assets.eth} />
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    height: 20,
    marginRight: 2,
    width: 20,
  },
  price: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
  },
});

export default EthPrice;

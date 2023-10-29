import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { INFTBid } from "../types/entities/nftBid";
import EthPrice from "./EthPrice";

interface Props {
  bid: INFTBid;
}

const DetailsBid = (props: Props): JSX.Element => {
  const { bid } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.biderImage}
        source={bid.image}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.biderName}>Bid placed by {bid.name}</Text>
        <Text style={styles.bidDate}>{bid.date}</Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
  biderImage: {
    height: 48,
    width: 48,
  },
  biderName: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
  },
  bidDate: {
    color: COLORS.secondary,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    marginTop: 3,
  },
});

export default DetailsBid;

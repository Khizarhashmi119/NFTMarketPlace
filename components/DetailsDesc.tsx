import { Fragment, useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import EthPrice from "./EthPrice";
import NFTTitle from "./NFTTitle";

import { INFT } from "../types/entities/nft";
import { COLORS, FONTS, SIZES } from "../constants";

interface Props {
  details: INFT;
}

const DetailsDesc = (props: Props): JSX.Element => {
  const { details } = props;
  const [noOfDescriptionLines, setNoOfDescriptionLines] = useState<
    number | undefined
  >(2);

  const handleClickDescText = () => {
    setNoOfDescriptionLines(undefined);
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <NFTTitle
          title={details.name}
          titleSize={SIZES.extraLarge}
          subtitle={details.creator}
          subtitleSize={SIZES.large}
        />
        <EthPrice price={details.price} />
      </View>
      <View style={styles.descAndDescTitleContainer}>
        <Text style={styles.descTitle}>Description</Text>
        <View style={styles.descContainer}>
          <TouchableWithoutFeedback onPress={handleClickDescText}>
            <Text style={styles.descText} numberOfLines={noOfDescriptionLines}>
              {details.description}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descAndDescTitleContainer: {
    marginVertical: SIZES.extraLarge * 1.5,
  },
  descTitle: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.font,
  },
  descContainer: {
    marginTop: SIZES.base,
  },
  descText: {
    color: COLORS.secondary,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    lineHeight: SIZES.large,
  },
});

export default DetailsDesc;

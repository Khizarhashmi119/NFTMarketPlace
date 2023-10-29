import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";

import CircleButton from "./CircleButton";
import EthPrice from "./EthPrice";
import NFTTitle from "./NFTTitle";
import PillButton from "./PillButton";
import SubInfo from "./SubInfo";

import { COLORS, SHADOWS, SIZES, assets } from "../constants";
import { INFT } from "../types/entities/nft";
import { TAppParamList } from "../types/paramList/AppParamList";

interface Props {
  index: number;
  nft: INFT;
}

const NFTCard = (props: Props): JSX.Element => {
  const { index, nft } = props;
  const navigation = useNavigation<NavigationProp<TAppParamList>>();

  const handlePress = () => {
    navigation.navigate("Details", {
      nftId: nft.id,
    });
  };

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: index === 0 ? SIZES.base : 0,
        },
      ]}
    >
      <View style={styles.mainImageContainer}>
        <Image style={styles.mainImage} source={nft.image} resizeMode="cover" />
        <CircleButton imgSource={assets.heart} top={10} right={10} />
      </View>
      <SubInfo />
      <View style={styles.detailsContainer}>
        <NFTTitle
          title={nft.name}
          titleSize={SIZES.large}
          subtitle={nft.creator}
          subtitleSize={SIZES.small}
        />
        <View style={styles.priceAndCtaContainer}>
          <EthPrice price={nft.price} />
          <PillButton minWidth={120} handlePress={handlePress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    marginHorizontal: SIZES.font,
    ...SHADOWS.dark,
  },
  mainImageContainer: {
    height: 250,
  },
  mainImage: {
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
    height: "100%",
    width: "100%",
  },
  detailsContainer: {
    padding: SIZES.font,
  },
  priceAndCtaContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.font,
  },
});

export default NFTCard;

import { RouteProp, useRoute } from "@react-navigation/native";
import { Fragment } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import DetailsBid from "../components/DetailsBid";
import DetailsDesc from "../components/DetailsDesc";
import DetailsHeader from "../components/DetailsHeader";
import FocusedStatusBar from "../components/FocusedStatusBar";
import PillButton from "../components/PillButton";
import SubInfo from "../components/SubInfo";

import { COLORS, FONTS, NFT_DATA, SIZES } from "../constants";
import { TAppParamList } from "../types/paramList/AppParamList";

const Details = () => {
  const route = useRoute<RouteProp<TAppParamList, "Details">>();
  const { nftId } = route.params;

  const details = NFT_DATA.find(({ id }) => id === nftId)!;

  return (
    <View style={styles.container}>
      <FocusedStatusBar backgroundColor="transparent" translucent={true} />
      <FlatList
        contentContainerStyle={styles.bidsContainer}
        data={details?.bids}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        ListHeaderComponent={() => (
          <Fragment>
            <DetailsHeader details={details} />
            <SubInfo />
            <View style={styles.detailsContainer}>
              <DetailsDesc details={details} />
              {details.bids.length !== 0 && (
                <Text style={styles.bidsTitle}>Current bids</Text>
              )}
            </View>
          </Fragment>
        )}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.bidButtonContainer}>
        <PillButton minWidth={200} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bidButtonContainer: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    bottom: 0,
    left: 0,
    paddingVertical: SIZES.font,
    position: "absolute",
    right: 0,
  },
  bidsContainer: {
    paddingBottom: SIZES.large * 4,
  },
  bidsTitle: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.font,
  },
  detailsContainer: {
    padding: SIZES.font,
  },
});

export default Details;

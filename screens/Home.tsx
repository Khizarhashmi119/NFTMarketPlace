import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FocusedStatusBar from "../components/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";
import NFTCard from "../components/NFTCard";

import { COLORS, NFT_DATA } from "../constants";

const Home = () => {
  const [nftDataState, setNftDataState] = useState(NFT_DATA);
  const [nftDataRefreshing, setNftDataRefreshing] = useState(false);

  const handleSearch = (value: string) => {
    const nextState = NFT_DATA.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    setNftDataState(nextState);
  };

  const handleRefreshNftData = () => {
    setNftDataRefreshing(true);
    setTimeout(() => setNftDataRefreshing(false), 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={styles.mainContent}>
        <View style={styles.backgroundContainer}>
          <View style={styles.darkBackGround} />
          <View style={styles.lightBackground} />
        </View>
        <FlatList
          data={nftDataState}
          ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          keyExtractor={({ id }) => id}
          renderItem={({ item, index }) => <NFTCard index={index} nft={item} />}
          onRefresh={handleRefreshNftData}
          refreshing={nftDataRefreshing}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  backgroundContainer: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  darkBackGround: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  lightBackground: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Home;

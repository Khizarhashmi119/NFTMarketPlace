import { Image, StyleSheet, Text, TextInput, View } from "react-native";

import { assets, COLORS, FONTS, SIZES } from "../constants";

interface Props {
  onSearch: (value: string) => void;
}

const HomeHeader = (props: Props): JSX.Element => {
  const { onSearch } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image style={styles.logo} source={assets.logo} resizeMode="contain" />
        <View style={{ height: 45, width: 45 }}>
          <Image
            style={styles.profileImage}
            source={assets.person01}
            resizeMode="contain"
          />
          <Image
            style={styles.verifiedImage}
            source={assets.badge}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Hello, Victoria 👋</Text>
        <Text style={styles.catchPhrase}>Lets find a masterpiece</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBackground}>
          <Image
            style={styles.searchIcon}
            source={assets.search}
            resizeMode="contain"
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search NFTs"
            onChangeText={onSearch}
            placeholderTextColor={COLORS.white}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.font,
  },
  imagesContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    height: 25,
    width: 90,
  },
  profileImage: {
    height: "100%",
    width: "100%",
  },
  verifiedImage: {
    bottom: 0,
    height: 15,
    position: "absolute",
    right: 0,
    width: 15,
  },
  greetingContainer: {
    marginVertical: SIZES.font,
  },
  greeting: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
  },
  catchPhrase: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    marginTop: SIZES.base / 2,
  },
  searchContainer: {
    marginTop: SIZES.font,
  },
  searchBackground: {
    alignItems: "center",
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.font,
    flexDirection: "row",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
  searchIcon: {
    height: 20,
    marginRight: SIZES.base,
    width: 20,
  },
  searchInput: {
    color: COLORS.white,
    flex: 1,
  },
});

export default HomeHeader;

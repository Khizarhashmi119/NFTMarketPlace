import { StyleSheet, View } from "react-native";

import ImageCmp from "./ImageCmp";

import { assets } from "../constants";

const People = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgSource, index) => (
          <ImageCmp
            key={`People-${index}`}
            imgSource={imgSource}
            index={index}
          />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default People;

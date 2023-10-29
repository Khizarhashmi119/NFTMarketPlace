import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, StatusBar, StyleSheet, View } from "react-native";

import CircleButton from "./CircleButton";

import { assets } from "../constants";
import { INFT } from "../types/entities/nft";
import { TAppParamList } from "../types/paramList/AppParamList";

interface Props {
  details: INFT;
}

const DetailsHeader = (props: Props): JSX.Element => {
  const { details } = props;
  const navigation = useNavigation<NavigationProp<TAppParamList>>();

  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        source={details.image}
        resizeMode="cover"
      />
      <CircleButton
        imgSource={assets.left}
        left={15}
        top={(StatusBar.currentHeight || 0) + 15}
        handlePress={() => navigation.goBack()}
      />
      <CircleButton
        imgSource={assets.heart}
        top={(StatusBar.currentHeight || 0) + 15}
        right={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 373,
    width: "100%",
  },
  mainImage: {
    height: "100%",
    width: "100%",
  },
});

export default DetailsHeader;

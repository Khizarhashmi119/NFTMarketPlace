import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import { SIZES } from "../constants";

interface Props {
  imgSource: ImageSourcePropType;
  index: number;
}

const ImageCmp = (props: Props): JSX.Element => {
  const { imgSource, index } = props;

  return (
    <Image
      style={[
        styles.image,
        {
          marginLeft: index === 0 ? 0 : -SIZES.font,
        },
      ]}
      source={imgSource}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48,
  },
});

export default ImageCmp;

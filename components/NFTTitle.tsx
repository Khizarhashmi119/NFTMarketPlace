import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../constants";

interface Props {
  title: string;
  titleSize: number;
  subtitle: string;
  subtitleSize: number;
}

const NFTTitle = (props: Props): JSX.Element => {
  const { title, titleSize, subtitle, subtitleSize } = props;

  return (
    <View>
      <Text style={[styles.title, { fontSize: titleSize }]}>{title}</Text>
      <Text style={[styles.subtitle, { fontSize: subtitleSize }]}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.primary,
    fontFamily: FONTS.semiBold,
  },
  subtitle: {
    color: COLORS.primary,
    fontFamily: FONTS.regular,
  },
});

export default NFTTitle;

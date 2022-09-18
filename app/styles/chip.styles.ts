import { StyleSheet } from "react-native";
import CommonStyles from "./common.styles";

const ChipStyle = StyleSheet.create({
  chip: {
    backgroundColor: "#f4f4f4",
    borderRadius: 20,
    alignSelf: "flex-start",
    ...CommonStyles.shadow,
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ChipStyle;

import { View, StyleSheet } from "react-native";
import CategoriesOptions from "./option-panels/categories-options";
import CountriesOptions from "./option-panels/countries-options";

const OptionsPanel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <CountriesOptions />
      </View>
      <View style={styles.option}>
        <CategoriesOptions />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: "row",
  },
  option: {
    marginHorizontal: 4,
  },
});

export default OptionsPanel;

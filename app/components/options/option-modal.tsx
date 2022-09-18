import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ChipStyle from "../../styles/chip.styles";

const OptionModal = ({
  title,
  options,
  onPress,
}: {
  title: string;
  options: string[];
  onPress: (option: string) => void;
}) => {
  const Option = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity
        style={[ChipStyle.chip, styles.chip]}
        onPress={() => onPress(item)}
      >
        <Text style={ChipStyle.text}>{item.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.options}>
        {options.map(option => (
          <Option item={option} key={option} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chip: {
    alignSelf: "center",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  options: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default OptionModal;

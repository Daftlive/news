import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CommonStyles from "../../styles/common.styles";

const SearchInput = ({ onChange }: { onChange: (text: string) => void }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search news.."
        placeholderTextColor="#000"
        onChangeText={onChange}
      />
      <TouchableOpacity>
        <Ionicons name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "white",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    ...CommonStyles.shadow,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    outlineStyle: "none",
    WebkitBoxShadow: "0 0 0 1000px white inset",
  },
});

export default SearchInput;

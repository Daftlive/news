import { Text, TouchableOpacity } from "react-native";
import ChipStyle from "../../styles/chip.styles";

const OptionChip = ({
  optionName,
  option,
  onPress,
}: {
  optionName: string;
  option: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={ChipStyle.chip} onPress={onPress}>
      <Text style={ChipStyle.text}>
        {optionName}: {option}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionChip;

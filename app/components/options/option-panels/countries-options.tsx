import { useEffect, useState } from "react";
import { View } from "react-native";
import { optionsService, optionsQuery } from "../../../stores/options";
import AppModal from "../../common/app-modal";
import OptionChip from "../option-chip";
import OptionModal from "../option-modal";

const CountriesOptions = () => {
  const options = ["us", "mx"];
  const [visible, setVisibility] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>("");

  useEffect(() => {
    optionsService.getCountry();
    optionsQuery.select("country").subscribe(item => setCurrentOption(item));
  }, []);

  const changeOption = (option: string) => {
    optionsService.updateCountry(option);
    setVisibility(false);
  };

  return (
    <View>
      <OptionChip
        optionName="Country"
        option={currentOption.toUpperCase()}
        onPress={() => setVisibility(true)}
      />
      <AppModal
        visible={visible}
        children={
          <OptionModal
            title="Countries"
            options={options}
            onPress={option => changeOption(option)}
          ></OptionModal>
        }
        close={() => setVisibility(false)}
      />
    </View>
  );
};

export default CountriesOptions;

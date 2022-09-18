import { useState, useEffect } from "react";
import { optionsQuery, optionsService } from "../../../stores/options";
import AppModal from "../../common/app-modal";
import OptionChip from "../option-chip";
import OptionModal from "../option-modal";

const CategoriesOptions = () => {
  const options = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const [visible, setVisibility] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>("");

  useEffect(() => {
    optionsService.getCategory();
    optionsQuery.select("category").subscribe(item => setCurrentOption(item));
  }, []);

  const changeOption = (option: string) => {
    optionsService.updateCategory(option);
    setVisibility(false);
  };

  return (
    <>
      <OptionChip
        optionName="Category"
        option={currentOption.toUpperCase()}
        onPress={() => setVisibility(true)}
      />
      <AppModal
        visible={visible}
        children={
          <OptionModal
            title="Categories"
            options={options}
            onPress={option => changeOption(option)}
          ></OptionModal>
        }
        close={() => setVisibility(false)}
      />
    </>
  );
};

export default CategoriesOptions;

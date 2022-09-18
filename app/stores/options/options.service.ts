import { getStorageItem, setStorageItem } from "../../utils/storage.service";
import { OptionsStore, optionsStore } from "./options.store";

export class OptionsService {
  constructor(protected appStore: OptionsStore) {}

  /**
   * Gets the country stored on the device
   */
  getCountry = async () => {
    const country = await getStorageItem("country");
    if (country) {
      this.appStore.update({ country });
    }
  };

  /**
   * Save or update the country on the device
   * @param country
   */
  updateCountry = (country: string) => {
    this.appStore.update({ country });
    setStorageItem("country", country);
  };

  /**
   * Gets the category stored on the device
   */
  getCategory = async () => {
    const category = await getStorageItem("category");
    if (category) {
      this.appStore.update({ category });
    }
  };

  /**
   * Save or update the category on the device
   * @param category
   */
  updateCategory = (category: string) => {
    this.appStore.update({ category });
    setStorageItem("category", category);
  };
}

export const optionsService = new OptionsService(optionsStore);


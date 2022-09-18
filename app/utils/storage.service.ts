import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Gets a key from the device's storage.
 * @param key
 * @returns string | null
 */
export const getStorageItem = async (key: string) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Adds or overwrites an item to device storage.
 * @param key
 * @param item
 * @returns boolean
 */
export const setStorageItem = async (key: string, item: string) => {
  try {
    await AsyncStorage.setItem(key, item);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * Remove an item from the device's storage
 * @param key
 * @returns boolean
 */
export const deleteStorageItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

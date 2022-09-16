import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (key: string) => {
  try {
    const item =
      Platform.OS === "ios" || Platform.OS === "android"
        ? await SecureStore.getItemAsync(key)
        : await AsyncStorage.getItem(key);
    return item;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const setItem = async (key: string, item: string) => {
  try {
    Platform.OS === "ios" || Platform.OS === "android"
      ? await SecureStore.setItemAsync(key, item)
      : await AsyncStorage.setItem(key, item);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteItem = async (key: string) => {
  try {
    Platform.OS === "ios" || Platform.OS === "android"
      ? await SecureStore.deleteItemAsync(key)
      : await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

import AsyncStorage from "@react-native-async-storage/async-storage";

export class FavoriteService {
  async loadData() {
    try {
      // Retrieve data from AsyncStorage
      const keys = await AsyncStorage.getAllKeys();

      const stores = await AsyncStorage.multiGet(keys);

      const data = stores.map((result, i, store) => {
        item = JSON.parse(store[i][1]);
        console.log(item.yourData);
        return item.yourData;
      });
      return data;
    } catch (error) {
      console.error("Error loading stored data:", error);
      throw error; // rethrow the error so that the calling code can handle it
    }
  }

  async saveData(key, data) {
    try {
      // Stringify the object before saving to AsyncStorage
      const dataToSave = JSON.stringify({ yourData: data });
      // Save data to AsyncStorage
      isExist = await AsyncStorage.getItem(key.toString());
      if (!isExist) {
        await AsyncStorage.setItem(key.toString(), dataToSave);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }

  async removeData(key) {
    try {
      // Remove data from AsyncStorage
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data:", error);
    }
  }

  async isExist(key) {
    try {
      // Check if data exists in AsyncStorage
      const value = await AsyncStorage.getItem(key);
      return value !== null;
    } catch (error) {
      console.error("Error checking if data exists:", error);
      return false;
    }
  }
}

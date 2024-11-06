import * as SecureStore from "expo-secure-store";

export enum EncryptedKey {
  userPassword = "safepay_user_password",
}

export const EncryptedStore = {
  save: async (key: EncryptedKey, value: string) => {
    return await SecureStore.setItemAsync(key, value);
  },
  get: async (key: EncryptedKey) => {
    return await SecureStore.getItemAsync(key);
  },
};

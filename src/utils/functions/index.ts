import AsyncStorage from '@react-native-community/async-storage';

export async function getToken() {
  const dataUser = JSON.parse(await AsyncStorage.getItem('@CERTIFICATES_NOW/userData') || '');
  return dataUser.token;
}

export async function getDataUser() {
  const dataUser = await AsyncStorage.getItem('@CERTIFICATES_NOW/userData');
  if (dataUser) { const dataParse = JSON.parse(dataUser || ''); return dataParse; }

  return null;
}

export function deleteLocalStorage() {
  AsyncStorage.clear();
}

export default {
  getToken,
  deleteLocalStorage,
  getDataUser,
};

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import Config from 'react-native-config';
import { Alert } from 'react-native';
import { getToken } from '../functions';

export const httpService = axios.create({
  // TODO: Ajustar variáveis do ios
  baseURL: Config.BASE_URL_API,
  timeout: 45000,
  timeoutErrorMessage: 'Tempo limite da requisição excedido.',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

httpService.interceptors.response.use(
  (response) => {
    // Do something with response data

    return response;
  },
  (error) => {
    // Do something with response error

    // You can even test for a response code
    // and try a new request before rejecting the promise

    if (
      error.request._hasError === true &&
      error.request._response.includes('connect')
    ) {
      Alert.alert(
        'Aviso',
        'Não foi possível conectar aos nossos servidores, sem conexão a internet',
        [{ text: 'OK' }],
        { cancelable: false },
      );
    }

    if (error.response.status === 401) {
      const requestConfig = error.config;
      // O token JWT expirou

      // TODO: Deslogar o usuário caso o token expirar
      // deleteToken();

      return axios(requestConfig);
    }

    return Promise.reject(error);
  },
);

httpService.interceptors.request.use(
  (config) => {
    getToken()
      .then((token) => {
        if (token !== '') config.headers.Authorization = `Bearer ${token}`;
        return Promise.resolve(config);
      })
      .catch(() => {
        return Promise.resolve(config);
      });

    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  },
);

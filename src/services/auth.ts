import AsyncStorage from '@react-native-community/async-storage';

import { CredentialsProps, LoginResponseProps } from '~/interfaces/user';

import { httpService } from '~/utils/http';

/**
 * Authenticar usuário
 * @param credentials credenciais do usuário
 */
export async function authenticate(
  credentials: CredentialsProps,
): Promise<LoginResponseProps> {
  try {
    const { data } = await httpService.post('/v1/account/loginresumido', {
      usuario: credentials.usuario.trim(),
      senha: credentials.senha.trim(),
    });

    console.log('dados de login', data);

    await AsyncStorage.setItem(
      '@CERTIFICATES_NOW/userData',
      JSON.stringify(data),
    );

    return data;
  } catch (error: any) {
    throw error;
  }
}

export default {
  authenticate,
};

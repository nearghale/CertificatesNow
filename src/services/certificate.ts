import { httpService } from '~/utils/http';
import { CertificateResponseProps } from '~/interfaces/certificates';
/**
 * obter certificados
 * @param filter filtro
 */
export async function getCertificates(
  filter: string,
): Promise<Array<CertificateResponseProps>> {
  try {
    const { data } = await httpService.get(
      `/Certificado/Listar?filtro=${filter}`,
    );

    return data;
  } catch (error) {
    throw error;
  }
}

export default {
  getCertificates,
};

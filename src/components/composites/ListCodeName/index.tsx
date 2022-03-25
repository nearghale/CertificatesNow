import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text, Input } from '~/components';
import { translate } from '~/I18n';
import { Color } from '~/styles';
import { getCertificates } from '~/services/certificate';
import { CertificateResponseProps } from '~/interfaces/certificates';
import formatter from '~/utils/formatter';
import * as S from './styles';

const ListCodeName: React.FC = () => {
  const [certificates, setCertificates] =
    useState<Array<CertificateResponseProps> | null>(null);
  const [search, setSearch] = useState<string>('');

  const handleGetCertificates = async (filter: string) => {
    setSearch('');
    setCertificates(null);

    const certificatesData = await getCertificates(filter);
    certificatesData.map(
      (certificate) => (certificate.color = handleColorName()),
    );

    setCertificates(certificatesData);
  };

  const handleColorName = () => {
    const numberColor = Math.floor(Math.random() * 4);
    switch (numberColor) {
      case 0:
        return Color.blueSecondary;
      case 1:
        return Color.greenSecondary;
      case 2:
        return Color.pinkSecondary;
      case 3:
        return Color.yellowSecondary;
      case 4:
        return Color.redSecondary;

      default:
        return Color.redSecondary;
    }
  };

  useEffect(() => {
    handleGetCertificates('ce');
  }, []);

  return (
    <>
      <Input
        nameIcon="search1"
        iconColor={Color.primaryBlue}
        background={Color.white}
        borderWidth={1}
        borderColor={Color.grayLight}
        title={''}
        placeHolder={translate('home-screen.search-code')}
        titleColor={Color.black}
        width={360}
        height={40}
        fontSize={15}
        borderRadius={1}
        fontFamily={'SFProDisplay-Regular'}
        pl={10}
        mb={20}
        value={search}
        onSubmitEditing={() => handleGetCertificates(search)}
        setValue={(value: string) => setSearch(value)}
      />
      <S.ContainerCodeName>
        <Text size={14} fontFamily="SFProDisplay-Bold">
          {translate('list-code-name-component.code')}
        </Text>
        <Text size={14} ml={80} fontFamily="SFProDisplay-Bold">
          {translate('list-code-name-component.name')}
        </Text>
      </S.ContainerCodeName>
      {certificates !== null ? (
        <>
          <S.ScrollItems>
            {certificates?.map((certificate, index) => (
              <S.ContainerItem key={index}>
                <Text size={14} fontFamily="SFProDisplay-Regular">
                  {certificate.iD_CERTIFICADO_QUALIDADE}
                </Text>
                <S.ContainerRoundAndName>
                  <S.ContainerRound color={certificate.color}>
                    <Text
                      size={13}
                      fontFamily="SFProDisplay-Bold"
                      color={Color.white}
                    >
                      {formatter.getTwoWords(certificate.dS_SUPERVISORA)}
                    </Text>
                  </S.ContainerRound>
                  <Text
                    size={13}
                    ml={8}
                    fontFamily="SFProDisplay-Bold"
                    color={Color.gray}
                  >
                    {certificate.dS_SUPERVISORA}
                  </Text>
                </S.ContainerRoundAndName>
              </S.ContainerItem>
            ))}
          </S.ScrollItems>
        </>
      ) : (
        <Container flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator
            animating={true}
            size={70}
            color={Color.primaryBlue}
          />
        </Container>
      )}
    </>
  );
};

export default ListCodeName;

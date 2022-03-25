import React from 'react';
import { Color } from '~/styles';
import normalize from '~/utils/dynamicRatio';
import useModal from '~/hooks/useModal';
import { useAuth } from '~/hooks/auth';
import { Icon, Button, Text } from '~/components';
import * as Styles from './styles';

const messageExit = 'Deseja realmente sair de sua conta?';

const Modal: React.FC = () => {
  const { hide } = useModal();
  const { cleanState } = useAuth();

  async function logOut() {
    hide();
    cleanState();
  }

  return (
    <Styles.Container>
      <Icon
        name={'exclamation'}
        size={normalize(40)}
        iconMaterialCommunityIcons
        color={Color.black}
      />

      <Text
        color={Color.black}
        mt={15}
        textAlign={'center'}
        size={24}
        fontFamily={'SFProDisplay-Regular'}
      >
        Atenção
      </Text>

      <Text
        color={Color.gray}
        mt={15}
        textAlign={'center'}
        size={17}
        fontFamily={'SFProDisplay-Regular'}
      >
        {messageExit}
      </Text>

      <Styles.ContainerRow>
        <Button
          w={100}
          h={38}
          borderRadius={10}
          fontSize={20}
          fontFamily={'SFProDisplay-Bold'}
          text={'Sim'}
          onPress={() => logOut()}
          loading={false}
          mt={50}
          backgroundColor={Color.gray}
        />
        <Button
          w={100}
          h={38}
          borderRadius={10}
          fontSize={20}
          fontFamily={'SFProDisplay-Bold'}
          text={'Não'}
          onPress={() => hide()}
          loading={false}
          mt={50}
          backgroundColor={Color.primaryBlue}
        />
      </Styles.ContainerRow>
    </Styles.Container>
  );
};

export default Modal;

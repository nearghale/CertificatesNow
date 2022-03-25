import React, { useCallback } from 'react';
import { Icon, Text, Image } from '~/components';
import { Color } from '~/styles';
import { translate } from '~/I18n';
import { ApplicationState } from '~/store';
import { useSelector } from 'react-redux';
import useModal from '~/hooks/useModal';
import * as S from './styles';
import Modal from './Modal';

const manImg = require('~/assets/images/man.png');

const Header: React.FC = () => {
  const { setComponent } = useModal();

  const handleRenderModalExit = useCallback(() => {
    setComponent(<Modal />);
  }, [setComponent]);

  const { userData } = useSelector((store: ApplicationState) => store.auth);
  return (
    <S.Container>
      <S.ContainerSub disabled>
        <Icon name="box" size={24} iconFeather color={Color.primaryBlue} />
        <Text
          fontFamily="SFProDisplay-Bold"
          size={18}
          color={Color.primaryBlue}
          ml={5}
        >
          {translate('header-component.storage')}
        </Text>
      </S.ContainerSub>
      <S.ContainerSub onPress={() => handleRenderModalExit()}>
        <Image image={manImg} w={20} h={20} disabled />
        <Text
          fontFamily="SFProDisplay-Bold"
          size={14}
          color={Color.gray}
          ml={10}
        >
          {userData?.usuario}
        </Text>
      </S.ContainerSub>
    </S.Container>
  );
};

export default Header;

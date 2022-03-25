import React from 'react';
import { Container, Header, Text, ListCodeName } from '~/components';
import { translate } from '~/I18n';

const Home: React.FC = () => {
  return (
    <Container flex={1} pt={2} alignItems="center" pb={10}>
      <Header />
      <Container flex={12} pt={30} pl={10} alignItems="flex-start">
        <Text size={23} fontFamily="SFProDisplay-Bold">
          {translate('home-screen.producers')}
        </Text>

        <ListCodeName />
      </Container>
    </Container>
  );
};

export default Home;

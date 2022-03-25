import React from 'react';
import { StatusBar } from 'react-native';

import ContainerComponentProps from './types';

import { Container, SafeAreaView } from './styles';

const ContainerComponent: React.FC<ContainerComponentProps> = ({
  w,
  bg,
  mb,
  ml,
  mr,
  mt,
  pt,
  pl,
  pr,
  pb,
  flex,
  flexDir,
  barStyle,
  children,
  alignSelf,
  alignItems,
  justifyContent,
  borderTopLeftRadius,
  borderTopRightRadius,
}) => {
  return (
    <>
      <SafeAreaView
        bg={bg}
        flex={flex}
        mt={mt}
        mb={mb}
        ml={ml}
        mr={mr}
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
      >
        <StatusBar barStyle={barStyle || 'light-content'} />
        <Container
          flex={flex}
          pt={pt}
          pl={pl}
          w={w}
          pr={pr}
          pb={pb}
          alignItems={alignItems}
          justifyContent={justifyContent}
          flexDir={flexDir}
          alignSelf={alignSelf}
        >
          {children}
        </Container>
      </SafeAreaView>
    </>
  );
};

export default ContainerComponent;

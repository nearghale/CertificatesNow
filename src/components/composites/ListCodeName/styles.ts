import { Color } from '~/styles';
import styled from 'styled-components/native';

import normalize from '~/utils/dynamicRatio';
import { ContainerRoundProps } from './types';

export const ContainerCodeName = styled.View`
  width: 99%;
  background-color: ${Color.grayLight};
  height: ${normalize(34)}px;
  flex-direction: row;
  align-items: center;
  padding-left: ${normalize(10)}px;
  margin-bottom: 4px;
`;

export const ContainerItem = styled.View`
  width: 99%;
  margin-top: 2px;
  border-width: 2px;
  border-color: ${Color.grayLight};
  height: ${normalize(34)}px;
  flex-direction: row;
  align-items: center;
  padding-left: ${normalize(18)}px;
`;

export const ScrollItems = styled.ScrollView`
  width: 100%;
`;

export const ContainerRoundAndName = styled.View`
  position: absolute;
  flex-direction: row;
  left: ${normalize(34)}px;
`;

export const ContainerRound = styled.View<ContainerRoundProps>`
  height: ${normalize(25)}px;
  width: ${normalize(25)}px;
  border-radius: ${normalize(25)}px;
  background-color: ${(props) =>
    props.color ? props.color : Color.primaryBlue};
  align-items: center;
  justify-content: center;
  margin-left: ${normalize(74)}px;
`;

import { Color } from '~/styles';
import styled from 'styled-components/native';

import normalize from '~/utils/dynamicRatio';

export const Container = styled.View`
  padding: ${normalize(20)}px;
  padding-top: ${normalize(30)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: ${normalize(10)}px;
  font-size: ${normalize(24)}px;
  font-weight: 700;
  color: ${Color.redSecondary};
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: ${normalize(250)}px;
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: ${normalize(341)}px;
  padding-right: ${normalize(10)}px;
`;

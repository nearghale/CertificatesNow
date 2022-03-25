import { Color } from '~/styles';
import normalize from '~/utils/dynamicRatio';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 98%;
  height: ${normalize(48)}px;
  border-width: 0.8px;
  border-color: ${Color.grayLight};
  flex-direction: row;
  align-items: center;
  padding: 0px 4px;
  justify-content: space-between;
`;

export const ContainerSub = styled.TouchableOpacity`
  flex-direction: row;
`;

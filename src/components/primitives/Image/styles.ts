import styled from 'styled-components/native';
import normalize from '~/utils/dynamicRatio';
import { ContainerProps, ImageProps } from './types';

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  border-radius: ${(props) =>
    props.borderRadius ? normalize(props.borderRadius) : 0}px;
  border-width: ${(props) =>
    props.borderWidth ? normalize(props.borderWidth) : 0}px;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : 'transparent'};
  background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
  margin-bottom: ${(props) => (props.mb ? normalize(props.mb) : 0)}px;
  margin-top: ${(props) => (props.mt ? normalize(props.mt) : 0)}px;
`;

export const Image = styled.Image<ImageProps>`
  width: ${(props) => (props.w ? normalize(props.w) : normalize(150))}px;
  height: ${(props) => (props.h ? normalize(props.h) : normalize(150))}px;
  border-radius: ${(props) =>
    props.borderRadius ? normalize(props.borderRadius) : 0}px;
`;

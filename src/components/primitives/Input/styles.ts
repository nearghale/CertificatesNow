import styled from 'styled-components/native';
import { Color } from '~/styles';
import normalize from '~/utils/dynamicRatio';
import { InputProps, InputComponentProps } from './types';

export const Container = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InputContainer = styled.View<InputComponentProps>`
  width: ${(props) =>
    props.width ? normalize(props.width) : normalize(312)}px;
  height: ${(props) =>
    props.height ? normalize(props.height) : normalize(48)}px;
  background-color: ${(props) =>
    props.background ? props.background : Color.white};
  border-radius: ${(props) =>
    props.borderRadius ? normalize(props.borderRadius) : 0}px;
  border-width: ${(props) =>
    props.borderWidth ? normalize(props.borderWidth) : 0}px;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : 'transparent'};
  padding-left: ${(props) =>
    props.pl ? normalize(props.pl) : normalize(10)}px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
`;

export const ContainerIcon = styled.TouchableOpacity``;

export const Input = styled.TextInput<InputProps>`
  margin-left: ${normalize(8)}px;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : 'SFProDisplay-Regular'};
  width: 90%;
  text-decoration: none;
  text-transform: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
  color: ${(props) => (props.color ? props.color : Color.gray)};
`;

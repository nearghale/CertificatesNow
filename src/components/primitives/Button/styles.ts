import styled from 'styled-components/native';
import { Color, FontFamily } from '~/styles';
import normalize from '~/utils/dynamicRatio';
import { TextProps, ButtonContainerProps } from './types';

export const Button = styled.TouchableOpacity<ButtonContainerProps>`
  margin-top: ${(props) => (props.mt ? normalize(props.mt) : 0)}px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  height: ${(props) => (props.h ? normalize(props.h) : normalize(48))}px;
  width: ${(props) => (props.w ? normalize(props.w) : normalize(312))}px;
  margin-bottom: ${(props) => (props.mb ? normalize(props.mb) : 0)}px;
  border-radius: ${(props) =>
    props.borderRadius ? normalize(props.borderRadius) : 0}px;
`;

export const Text = styled.Text<TextProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  color: ${(props) => (props.color ? props.color : Color.white)};
  line-height: ${(props) =>
    props.lineHeight ? normalize(props.lineHeight) : normalize(24)}px;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : FontFamily.SFProRegular};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 100)};
`;

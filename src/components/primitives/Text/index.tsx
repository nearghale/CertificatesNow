import styled from 'styled-components/native';

import normalize from '~/utils/dynamicRatio';
import { Color, FontFamily } from '~/styles';
import TextComponentProps from './types';

export const Text = styled.Text<TextComponentProps>`
  color: ${(props) => (props.color ? props.color : Color.black)};
  font-size: ${(props) => (props.size ? props.size : 12)}px;
  line-height: ${(props) => (props.lignHeight ? props.lignHeight : 24)}px;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : FontFamily.SFProRegular};
  font-variant: lining-nums;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 100)};
  margin-left: ${(props) => (props.ml ? normalize(props.ml) : 0)}px;
  margin-right: ${(props) => (props.mr ? normalize(props.mr) : 0)}px;
  margin-top: ${(props) => (props.mt ? normalize(props.mt) : 0)}px;
  margin-bottom: ${(props) => (props.mb ? normalize(props.mb) : 0)}px;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  text-decoration: ${(props) => (props.trought ? 'line-through' : 'none')};
  text-decoration-color: ${(props) =>
    props.textDecorationColor ? props.textDecorationColor : 'transparent'};
`;

export default Text;

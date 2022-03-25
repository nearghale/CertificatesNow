export default interface TextComponentProps {
  size?: number;
  w?: number;
  color?: string;
  uppercase?: boolean;
  trought?: boolean;
  fontFamily?: FontProps;
  opacity?: number;
  lignHeight?: number;
  ml?: number;
  mt?: number;
  fontWeight?: number;
  zIndex?: number;
  mr?: number;
  mb?: number;
  textAlign?: TextAlignProps;
  textDecorationColor?: string;
}

export type TextAlignProps =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'start'
  | 'end';

export type FontProps =
  | 'SFProDisplay-Bold'
  | 'SFProDisplay-Medium'
  | 'SFProDisplay-Regular'
  | 'SFProDisplay-Semibold';

export interface TextProps {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  lineHeight?: number;
  fontWeight?: number;
}

export interface ButtonContainerProps {
  h?: number;
  w?: number;
  backgroundColor?: string;
  mb?: number;
  borderRadius?: number;
  mt?: number;
}

export interface ButtonComponentProps {
  loading: boolean;
  text: string;
  fontWeight?: number;
  mt?: number;
  backgroundColor?: string;
  borderRadius?: number;
  h?: number;
  w?: number;
  mb?: number;
  lineHeight?: number;
  fontSize?: number;
  fontFamily?: FontProps;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export type FontProps =
  | 'SFProDisplay-Bold'
  | 'SFProDisplay-Medium'
  | 'SFProDisplay-Regular'
  | 'SFProDisplay-Semibold';

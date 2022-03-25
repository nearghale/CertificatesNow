export interface InputComponentProps {
  width?: number;
  height?: number;
  placeHolder?: string;
  borderRadius?: number;
  background?: string;
  visible?: boolean;
  nameIcon?: string;
  fontSize?: number;
  iconColor?: string;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  pl?: number;
  fontFamily?: FontProps;
  color?: string;
  titlePaddingLeft?: number;
  setValue?: (text: string) => void;
  borderWidth?: number;
  justifyContent?: JustifyItemProps;
  value?: string;
  borderColor?: string;
  title?: string;
  titleColor?: string;
  errors?: string;
  touched?: boolean;
  keyboardType?: KeyboardTypeProps;
  multiline?: boolean;
  onPress?: () => void;
  onSubmitEditing?: () => void;
}

export interface InputProps {
  color?: string;
  fontFamily?: FontProps;
  fontSize?: number;
  pl?: number;
}

export type FontProps =
  | 'SFProDisplay-Bold'
  | 'SFProDisplay-Medium'
  | 'SFProDisplay-Regular'
  | 'SFProDisplay-Semibold';

export type JustifyItemProps =
  | 'flex-start'
  | 'center'
  | 'baseline'
  | 'flex-end';

export type KeyboardTypeProps =
  | 'numeric'
  | 'default'
  | 'email-address'
  | 'number-pad';

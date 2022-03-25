export default interface ContainerComponentProps {
  flex?: number;
  h?: number;
  w?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  bg?: string;
  pt?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  alignSelf?: AlignSelf;
  flexDir?: FlexDirection;
  barStyle?: StatusBarStyle;
}

export type AlignSelf = 'flex-start' | 'center' | 'auto' | 'flex-end';

export type AlignItems = 'flex-start' | 'center' | 'baseline' | 'flex-end';

export type FlexDirection = 'column' | 'row';

export type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'flex-end';

export type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

export interface ImageComponentProps {
  w?: number;
  h?: number;
  bg?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  mb?: number;
  mt?: number;
  disabled?: boolean;
  image: any;
  onPress?: () => void;
}

export interface ImageProps {
  w?: number;
  h?: number;
}

export interface ContainerProps {
  bg?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  mb?: number;
  mt?: number;
}

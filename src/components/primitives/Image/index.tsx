import React from 'react';
import { ImageComponentProps } from './types';

import * as Styles from './styles';

const Image: React.FC<ImageComponentProps> = ({
  image,
  borderColor,
  bg,
  borderRadius,
  borderWidth,
  h,
  w,
  mb,
  mt,
  disabled,
  onPress,
}) => {
  return (
    <Styles.Container
      onPress={onPress}
      bg={bg}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      disabled={disabled}
      mb={mb}
      mt={mt}
    >
      <Styles.Image
        source={image?.uri ? { uri: image.uri } : image}
        w={w}
        h={h}
        borderRadius={borderRadius}
      />
    </Styles.Container>
  );
};

export default Image;

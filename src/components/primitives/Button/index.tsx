import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as Styles from './styles';
import { ButtonComponentProps } from './types';

const Button: React.FC<ButtonComponentProps> = ({
  loading,
  text,
  fontWeight,
  mt,
  mb,
  h,
  w,
  borderRadius,
  lineHeight,
  fontSize,
  fontFamily,
  color,
  disabled,
  backgroundColor,
  onPress,
}) => {
  return (
    <Styles.Button
      onPress={onPress}
      borderRadius={borderRadius}
      w={w}
      h={h}
      disabled={disabled || loading}
      mt={mt}
      mb={mb}
      backgroundColor={backgroundColor}
    >
      {loading ? (
        <ActivityIndicator animating={loading} size={30} color={'#fff'} />
      ) : (
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Styles.Text
            lineHeight={lineHeight}
            fontSize={fontSize}
            color={color}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
          >
            {text}
          </Styles.Text>
        </View>
      )}
    </Styles.Button>
  );
};

export default Button;

import React from 'react';
import { Color } from '~/styles';
import { Icon } from '~/components';
import Text from '../Text';
import * as S from './styles';
import { InputComponentProps } from './types';

const Input: React.FC<InputComponentProps> = ({
  width,
  height,
  background,
  mt,
  mb,
  visible,
  ml,
  mr,
  titlePaddingLeft,
  borderRadius,
  borderColor,
  fontFamily,
  keyboardType,
  borderWidth,
  color,
  errors,
  touched,
  value,
  setValue,
  title,
  titleColor,
  placeHolder,
  pl,
  multiline,
  nameIcon,
  fontSize,
  onPress,
  iconColor,
  onSubmitEditing,
}) => {
  return (
    <S.Container>
      <Text
        color={titleColor}
        ml={titlePaddingLeft || 8}
        mb={3}
        size={14}
        fontFamily={'SFProDisplay-Medium'}
        fontWeight={400}
        mt={mt}
      >
        {title}
      </Text>
      <S.InputContainer
        width={width}
        height={height}
        background={background}
        mb={mb}
        ml={ml}
        mr={mr}
        borderColor={borderColor}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        pl={pl}
      >
        <S.ContainerIcon onPress={onPress}>
          <Icon
            size={20}
            color={iconColor || Color.gray}
            name={nameIcon || ''}
            iconAntDesign
          />
        </S.ContainerIcon>
        <S.Input
          placeholder={placeHolder || ''}
          value={value}
          autoCorrect={false}
          secureTextEntry={!!visible}
          color={color}
          multiline={multiline}
          onChangeText={setValue}
          fontFamily={fontFamily}
          placeholderTextColor={Color.gray}
          keyboardType={keyboardType}
          autoCapitalize="none"
          fontSize={fontSize}
          onSubmitEditing={onSubmitEditing}
        />
      </S.InputContainer>
      {errors && touched && (
        <Text
          size={12}
          color={Color.basicRed}
          textAlign="center"
          mt={10}
          ml={10}
        >
          {errors}
        </Text>
      )}
    </S.Container>
  );
};

export default Input;

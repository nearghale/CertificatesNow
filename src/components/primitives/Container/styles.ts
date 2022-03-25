import styled from 'styled-components/native';
import normalize from '~/utils/dynamicRatio';
import { Dimensions } from 'react-native';
import ContainerComponentProps from './types';

const { width } = Dimensions.get('window');

export const SafeAreaView = styled.SafeAreaView<ContainerComponentProps>`
  flex: ${(props) => (props.flex ? props.flex : 0)};
  background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
  margin-top: ${(props) => (props.mt ? normalize(props.mt) : 0)}px;
  margin-bottom: ${(props) => (props.mb ? normalize(props.mb) : 0)}px;
  border-top-left-radius: ${(props) =>
    props.borderTopLeftRadius ? normalize(props.borderTopLeftRadius) : 0}px;
  border-top-right-radius: ${(props) =>
    props.borderTopRightRadius ? normalize(props.borderTopRightRadius) : 0}px;
`;
export const NoSafeAreaView = styled.View<ContainerComponentProps>`
  flex: ${(props) => (props.flex ? props.flex : 0)};
`;

export const Container = styled.View<ContainerComponentProps>`
  flex: ${(props) => (props.flex ? props.flex : 0)};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'auto')};
  flex-direction: ${(props) => (props.flexDir ? props.flexDir : 'column')};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  padding-left: ${(props) => (props.pl ? normalize(props.pl) : 0)}px;
  padding-right: ${(props) => (props.pr ? normalize(props.pr) : 0)}px;
  padding-top: ${(props) => (props.pt ? normalize(props.pt) : 0)}px;
  padding-bottom: ${(props) => (props.pb ? normalize(props.pb) : 0)}px;
  width: ${(props) => (props.w ? normalize(props.w) : width)}px;
`;

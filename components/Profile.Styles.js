import styled from 'styled-components/native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from './styles';

export const StyledProfileTextTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.darkLight};
  padding: 20px;
  padding-bottom: 20px;
  ${(props) =>
    props.title == true &&
    `
    color: ${Colors.tertiary};
  `}
`;

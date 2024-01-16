import styled from 'styled-components/native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from './styles';

export const HistoryContainer = styled.View`
  width: 100%;
  padding: 10px;
`;
export const HistoryList = styled.View`
  width: 100%;
  border-width: 1px;
  border-radius: 9px;
  margin-top: 17px;
  border-color: ${Colors.darkLight};
  align-items: center;
  justify-content: space-between;
`;

export const HistoryTitle = styled.Text`
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 29px;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
  color: ${Colors.tertiary};
`;

export const HistoryText = styled.Text`
  padding: 10px;
  color: white;
`;
export const HistoryResultText = styled.Text`
  padding: 10px;
  font-size: 18px;
`;

export const HistoryImage = styled.Image`
  margin: 10px;
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;

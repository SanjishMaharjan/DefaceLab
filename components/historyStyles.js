import styled from 'styled-components/native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from './styles';

export const HistoryContainer = styled.View`
  width: 100%;
`;
export const HistoryList = styled.View`
  width: 100%;
  border-width: 1px;
  border-radius: 20px;
  margin-top: 25px;
  background-color: ${Colors.card};
`;
export const HistoryInnerContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 15px;
  padding: 10px;
  align-items: center;
`;
export const HistoryTextContainer = styled.View`
  flex-direction: column;
`;

export const HistoryTitle = styled.Text`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 29px;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
  color: ${Colors.darkLight};
`;

export const HistoryText = styled.Text`
  padding: 10px;
  color: ${Colors.darkLight};
`;
export const HistoryResultText = styled.Text`
  padding: 10px;
  text-align: center;
  font-size: 18px;
`;

export const HistoryImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 20px;
`;

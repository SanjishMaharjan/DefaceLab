import styled from 'styled-components';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#1eB981',
  red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 20}px;
  background-color: ${primary};
`;
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  margintop: 20px;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 220px;
`;
export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-top: 29px;
  margin-bottom: 29px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;
export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.google == true &&
    `
  background-color: ${green};
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-content: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;
// Home Page

export const StyledMediaButton = styled.TouchableOpacity`
  padding: 18px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-vertical: 5px;
  height: 60px;
`;

export const MediaContainer = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ResultTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 20px;
  padding-bottom: 40px;
`;
export const HomepageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
  padding-bottom: 40px;
`;
export const HomePageLogo = styled.Image`
  width: 200px;
  height: 100px;
`;

export const HeroImageContainer = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 7;
  }
  shadow-opacity: 0.43;
  shadow-radius: 25px;
  elevation: 15;
  overflow: hidden;
`;

export const HeroImage = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 20px;
`;

export const ProgessBar = styled.View`
  height: 20px;
  width: 80%;
  border-radius: 20px;
  background-color: ${darkLight};
  margin-vertical: 10px;
  overflow: hidden;
`;

export const ProgressBarText = styled.Text`
  color: white;
  text-align: center;
`;
export const Progress = styled.View`
  height: 100%;
  width: ${({ percentage }) => (percentage ? percentage + '%' : '0%')};
  background-color: ${Colors.brand};
  align-items: center;
  justify-content: center;
`;

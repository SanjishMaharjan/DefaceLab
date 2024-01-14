import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  StyledContainer,
  StyledButton,
  ButtonText,
  InnerContainer,
  PageLogo,
  SubTitle,
  MediaContainer,
  HeroImage,
  HomePageLogo,
  PageTitle,
  HomepageTitle,
  HeroImageContainer,
  StyledMediaButton,
  Colors,
  Line,
  ResultTitle,
  ProgessBar,
  Progress,
  ProgressBarText,
} from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const { brand, darkLight, primary } = Colors;

const Result = () => {
  const [imgUrl, setimgUrl] = useState('');

  return (
    <ScrollView>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <Line />
          <ResultTitle>Result</ResultTitle>
          {imgUrl && (
            <Image
              resizeMethod="contain"
              style={{
                width: 300,
                height: 300,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 7 },
                shadowOpacity: 0.43,
                shadowRadius: 25,
                elevation: 15,
              }}
              source={{ uri: imgUrl }}
            />
          )}
          {/* <ResultTitle>Analysis results for provided image:</ResultTitle> */}
          <ResultTitle>Real</ResultTitle>
          <ProgessBar>
            {/* <ProgressBarText>{40}%</ProgressBarText> */}
            <Progress percentage={40} />
          </ProgessBar>
          <ResultTitle>Fake</ResultTitle>
          <ProgessBar>
            <Progress percentage={60} />
          </ProgessBar>
        </InnerContainer>
      </StyledContainer>
    </ScrollView>
  );
};

export default Result;

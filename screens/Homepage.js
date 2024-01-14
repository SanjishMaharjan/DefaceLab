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
import Result from './Result';

const { brand, darkLight, primary } = Colors;

const Homepage = () => {
  const [imgUrl, setimgUrl] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    handleImagePickerResponse(result);
  };

  const openImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    handleImagePickerResponse(result);
  };

  const handleImagePickerResponse = (result) => {
    if (!result.cancelled) {
      console.log(result);
      setimgUrl(result.uri);
    }
  };

  return (
    <ScrollView>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          {/* <HomePageLogo resizeMode="cover" source={require('../assets/img/logoblack.png')} /> */}
          <HomepageTitle>DefaceLab</HomepageTitle>
          <HeroImageContainer>
            <HeroImage resizeMode="cover" source={require('../assets/img/facerecognization.gif')} />
          </HeroImageContainer>

          <SubTitle>Scan & Detect Deepfake</SubTitle>
          <MediaContainer>
            <StyledMediaButton onPress={openCamera}>
              <Fontisto name="camera" color={primary} size={20} />
              {/* <ButtonText>Open Camera</ButtonText> */}
            </StyledMediaButton>
            <StyledMediaButton onPress={openImagePicker}>
              <Fontisto name="picture" color={primary} size={20} />
              {/* <ButtonText>Upload Image / Video</ButtonText> */}
            </StyledMediaButton>
          </MediaContainer>
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
          <ResultTitle>Analysis results for provided image:</ResultTitle>
          <ResultTitle>Real</ResultTitle>
          <ProgessBar>
            <ProgressBarText>{40}%</ProgressBarText>
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

export default Homepage;

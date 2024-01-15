import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo, adjust the import accordingly
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  ResultTitle,
  ProgessBar,
  Progress,
  ProgressBarText,
  Colors,
  StyledProfileContainer,
} from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

const { brand, darkLight, primary } = Colors;

const Profile = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ScrollView style={{ backgroundColor: darkTheme ? darkLight : primary }} contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <StyledProfileContainer>
          <StatusBar style={darkTheme ? 'light' : 'dark'} />
          <InnerContainer>
            {/* Profile Icon */}
            <Ionicons name="person-circle-outline" size={100} color={brand} />

            {/* Profile Information */}
            <PageTitle>Profile</PageTitle>
            <ResultTitle>
              <Ionicons name="person-outline" size={20} color={brand} /> Username: Sanjish Maharjan
            </ResultTitle>
            <ResultTitle>
              <Ionicons name="mail-outline" size={20} color={brand} /> Email: sanjishmaharjan619@gmail.com
            </ResultTitle>

            {/* Toggle Theme Button */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              {darkTheme ? (
                <Ionicons name="moon-outline" size={24} color={brand} />
              ) : (
                <Ionicons name="sunny-outline" size={24} color={brand} />
              )}
              <Switch
                value={darkTheme}
                onValueChange={toggleTheme}
                thumbColor={darkTheme ? brand : '#f4f3f4'}
                trackColor={{ true: darkLight, false: '#f4f3f4' }}
              />
            </View>
          </InnerContainer>
        </StyledProfileContainer>
      </StyledContainer>
    </ScrollView>
  );
};

export default Profile;

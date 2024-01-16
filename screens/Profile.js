import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  ResultTitle,
  Colors,
  StyledButton,
  ButtonText,
  StyledProfileContainer,
} from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

const { brand, darkLight, primary, tertiary } = Colors;

const Profile = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const navigation = useNavigation(); // Initialize the navigation object

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleLogout = () => {
    // Add any logout logic here
    // ...

    // Navigate to the home page after logout
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={{ backgroundColor: darkTheme ? primary : tertiary }} contentContainerStyle={{ flexGrow: 1 }}>
      <StyledContainer>
        <PageTitle>DeFaceLab</PageTitle>
        <StyledProfileContainer>
          <StatusBar style={darkTheme ? 'light' : 'dark'} />
          <InnerContainer>
            {/* Profile Icon */}
            <Ionicons name="person-circle-outline" size={100} color={darkLight} />

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
                thumbColor={darkTheme ? brand : tertiary}
                trackColor={{ true: darkLight, false: tertiary }}
              />
            </View>
            <StyledButton logout={true} onPress={handleLogout}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </InnerContainer>
        </StyledProfileContainer>
      </StyledContainer>
    </ScrollView>
  );
};

export default Profile;

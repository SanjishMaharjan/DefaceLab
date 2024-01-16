import React, { useState } from 'react';
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View, TouchableOpacity } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

// Colors
const { brand, darkLight } = Colors;
const Signup = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>DeFaceLab</PageTitle>
        <SubTitle>Account Signup</SubTitle>
        {show && (
          <DateTimePicker testID="dateTimePicker" value={date} mode="date" display="default" onChange={onChange} />
        )}
        <Formik
          initialValues={{ fullname: '', email: '', dateofBirth: '', confirmPassword: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="User"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                value={values.fullname}
              />
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="example@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Date of Birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateofBirth')}
                onBlur={handleBlur('dateofBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="*******"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="*******"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Signup</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Already have an account ?</ExtraText>
                <TextLink onPress={() => navigation.navigate('Login')}>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, showDatePicker, isDate, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;

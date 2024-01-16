import React from 'react';
import { Text, View, StyleSheet, Pressable, FlatList, StatusBar, Image, ScrollView } from 'react-native';
import { StyledContainer, InnerContainer, Colors, PageTitle, SubTitle } from '../components/styles';
import {
  HistoryContainer,
  HistoryImage,
  HistoryList,
  HistoryResultText,
  HistoryText,
  HistoryTitle,
} from '../components/historyStyles';
const HistoryData = [
  { image: require('../assets/img/realelonhead.png'), date: '2022-02-01', size: '3MB', result: 'real' },
  { image: require('../assets/img/elonhead.png'), date: '2022-01-01', size: '2MB', result: 'fake' },
  { image: require('../assets/img/realjukehead.png'), date: '2022-02-01', size: '3MB', result: 'real' },
  { image: require('../assets/img/jukehead.png'), date: '2022-01-01', size: '2MB', result: 'fake' },
];

const History = () => {
  return (
    <ScrollView>
      <StyledContainer>
        <HistoryContainer>
          <StatusBar style="dark" />
          <PageTitle>DeFaceLab</PageTitle>
          <HistoryTitle>Recent Task</HistoryTitle>

          <FlatList
            data={HistoryData}
            renderItem={({ item }) => (
              <HistoryList>
                {/* <Pressable android_ripple={{ color: Colors.brand }}> */}
                <HistoryImage resizeMode="cover" source={item.image} />
                <HistoryText>
                  Date: {item.date} - Size: {item.size}
                </HistoryText>

                {/* </Pressable> */}
                <HistoryResultText style={{ color: item.result === 'real' ? Colors.green : Colors.red }}>
                  Result: {item.result}
                </HistoryResultText>
              </HistoryList>
            )}
          />
        </HistoryContainer>
      </StyledContainer>
    </ScrollView>
  );
};

export default History;

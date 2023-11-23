// BackupApp.js
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import MultiLineChart from './components/MultiLineChart';

export default function App() {
  const dataSets = [
    { data: [10, 15, 7, 20, 12, 18], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    { data: [5, 10, 15, 5, 20, 8], labels: ['A', 'B', 'C', 'D', 'E', 'F'] },
    { data: [8, 12, 16, 10, 5, 20], labels: ['X', 'Y', 'Z', 'P', 'Q', 'R'] },
    { data: [15, 18, 12, 10, 7, 25], labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'] },
    { data: [3, 6, 9, 12, 15, 18], labels: ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta'] },
    { data: [20, 15, 10, 5, 10, 15], labels: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'] },
    { data: [12, 8, 15, 20, 5, 10], labels: ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'] },
    { data: [6, 12, 18, 24, 30, 36], labels: ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'] },
    { data: [30, 25, 20, 15, 10, 5], labels: ['Cat', 'Dog', 'Fish', 'Bird', 'Hamster', 'Turtle'] },
    // Add more datasets as needed
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1 }}>
        <MultiLineChart chartDataList={dataSets} />
      </View>
    </SafeAreaView>
  );
}

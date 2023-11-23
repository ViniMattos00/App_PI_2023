// Example usage in your React Native component
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import MultiLineChart from './components/MultiLineChart';

const App = () => {
  const [dataSets, setDataSets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/getData');
      const data = await response.json();
      setDataSets(data);
      console.log(dataSets)
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
    //   <View style={{ flex: 1 }}>
    //     <MultiLineChart chartDataList={dataSets} />
    //   </View>
    // </SafeAreaView>
    <>
      
    </>
  );
};

export default App;

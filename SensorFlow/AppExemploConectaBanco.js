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

      // Extract values associated with the key 'cddepto'
      const extractedData = data.map(item => item.cddepto);

      setDataSets(extractedData);
      console.log(dataSets);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1 }}>
        <MultiLineChart chartDataList={dataSets} />
      </View>
    </SafeAreaView>
  );
};

export default App;

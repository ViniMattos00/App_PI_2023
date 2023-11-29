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
      //const response = await fetch('http://localhost:3000/getData');
      const response = await fetch('http://192.168.56.1:3000/getData');
      //const response = await fetch('http://127.0.0.1:3000/getData');
      const data = await response.json();
  
      // Transform the data to the desired format
      const formattedData = {
        dataSets: [
          {
            data: data.map(item => item.emw_temperature),
            labels: data.map((item, index) => (index + 1).toString()),
          },
          // You can add more datasets as needed
        ],
      };
      
  
      setDataSets(formattedData.dataSets);
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

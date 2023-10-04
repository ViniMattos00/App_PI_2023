import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import SwipeListView from 'react-native-swipe-list-view';
import { AntDesign } from '@expo/vector-icons';

const WidgetManagerScreen = () => {
  const [selectedWidget, setSelectedWidget] = useState(null);
  const [deletedWidgets, setDeletedWidgets] = useState([]);
  
  const widgets = [
    { id: 1, name: 'Widget 1' },
    { id: 2, name: 'Widget 2' },
    { id: 3, name: 'Widget 3' },
  ];

  const toggleWidgetSelection = (id) => {
    if (selectedWidget === id) {
      setSelectedWidget(null);
    } else {
      setSelectedWidget(id);
    }
  };

  const deleteSelectedWidget = (id) => {
    const deletedWidget = widgets.find((widget) => widget.id === id);
    if (deletedWidget) {
      setDeletedWidgets([...deletedWidgets, deletedWidget]);
      widgets.splice(widgets.indexOf(deletedWidget), 1);
      setSelectedWidget(null);
    }
  };

  const addWidgetBack = () => {
    if (deletedWidgets.length > 0) {
      const restoredWidget = deletedWidgets.pop();
      if (restoredWidget) {
        setDeletedWidgets([...deletedWidgets]);
        widgets.push(restoredWidget);
      }
    }
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.hiddenItem}>
      <TouchableOpacity
        onPress={() => deleteSelectedWidget(data.item.id)}
        style={styles.deleteButton}
      >
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Widget Manager</Text>
      <SwipeListView
        data={widgets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleWidgetSelection(item.id)}
            style={[
              styles.widgetItem,
              selectedWidget === item.id && styles.selectedItem,
            ]}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={addWidgetBack}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  widgetItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  selectedItem: {
    backgroundColor: 'lightblue',
  },
  hiddenItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WidgetManagerScreen;

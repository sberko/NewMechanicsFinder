import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const MechanicList = ({ mechanics }) => {
  const navigation = useNavigation(); 

  const handleMechanicPress = (mechanic) => {
    navigation.navigate('MechanicDetailScreen', { mechanic }); // Use navigation to navigate
  };

  return (
    <FlatList
      data={mechanics}
      keyExtractor={(item) => item.place_id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleMechanicPress(item)}>
          <View style={styles.mechanicItem}>
            <Text style={styles.mechanicName}>{item.name}</Text>
            <Text>{item.vicinity}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  mechanicItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  mechanicName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MechanicList;

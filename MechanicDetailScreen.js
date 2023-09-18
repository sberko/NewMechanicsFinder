import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MechanicDetailScreen = ({ route }) => {
  const { mechanic } = route.params;
  const navigation = useNavigation();

  const goToAnotherScreen = () => {
    navigation.navigate('DisplayScreen', { mechanic });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name: {mechanic.name}</Text>
      <Text>Address: {mechanic.vicinity}</Text>
      <Text>Phone: {mechanic.phone}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToAnotherScreen}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  name: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 100, 
  },
});

export default MechanicDetailScreen;

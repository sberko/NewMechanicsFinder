import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from '../styles';
import * as Location from 'expo-location';
import { fetchNearbyMechanics } from './fetchNearbyMechanics';
import MechanicList from './MechanicList';

function HomeScreen({ navigation }) {
  const [mechanics, setMechanics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      fetchNearbyMechanics(latitude, longitude)
        .then((mechanicsData) => {
          setMechanics(mechanicsData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching mechanics:', error);
          setLoading(false);
        });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Nearby Mechanics</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <MechanicList mechanics={mechanics} />
          <View style={localStyles.buttonContainer}>
            <Button
              title="Login"
              onPress={() => navigation.navigate('LoginScreen')}
              style={localStyles.button}
              color="orange"
            />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('SignUpScreen')}
              style={localStyles.button}
              color="orange"
            />
          </View>
        </>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //height: '100%', 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;

import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, initializing the app)
    setTimeout(() => {
      setIsLoaded(true);
      navigation.replace('HomeScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/mechanic 1.jpeg')} 
        style={styles.splashImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  splashImage: {
    width: 200, 
    height: 200,
  },
});

export default SplashScreen;

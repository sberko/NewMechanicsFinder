import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
 

function ReviewScreen() {
  const [review, setReview] = useState('');

  const handleReviewSubmit = () => {
    // saveReview();
    alert('Review submitted!'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your comment"
        multiline
        value={review}
        onChangeText={setReview}
      />
      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={handleReviewSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ReviewScreen;

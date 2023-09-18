import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const DisplayScreen = ({ route, navigation }) => {
  const { mechanic } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { sender: 'user', content: message }]);
      setMessage('');
    }
  };
  const handleReviewButton = () => {
    navigation.navigate('ReviewScreen', { mechanic });
  };
  const handlePaymentButton = () => {
    navigation.navigate('PaymentPage');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {mechanic.name}</Text>
      <Text style={styles.text}>Address: {mechanic.vicinity}</Text>
      <Text style={styles.text}>Phone: {mechanic.phone}</Text>

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessage : styles.mechanicMessage}>
            <Text style={styles.messageText}>{item.content}</Text>
          </View>
        )}
      />

      <View style={styles.messageContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMessage(text)}
          value={message}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.paymentButton} onPress={handlePaymentButton}>
      <Text style={styles.buttonText}>Make Payment</Text>
       </TouchableOpacity>

      <TouchableOpacity style={styles.reviewButton} onPress={handleReviewButton}>
        <Text style={styles.buttonText}>Leave a Review</Text>
      </TouchableOpacity>

      
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  userMessage: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'flex-end',
    maxWidth: '70%',
  },
  mechanicMessage: {
    backgroundColor: 'lightgreen',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'flex-start',
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 16,
  },
  messageContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    flex: 1,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  paymentButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  reviewButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DisplayScreen;

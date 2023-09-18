import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [mobileMoneyNumber, setMobileMoneyNumber] = useState('');

  const handlePayment = () => {
    let paymentMessage = '';

    if (paymentMethod === 'visa') {
      paymentMessage = `Paid with Visa card ending in ${cardNumber.slice(-4)}.`;
    } else if (paymentMethod === 'mobileMoney') {
      paymentMessage = `Paid with Mobile Money number: ${mobileMoneyNumber}`;
    } else {
      paymentMessage = 'Payment method not selected.';
    }

    alert(paymentMessage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Money Number"
        value={mobileMoneyNumber}
        onChangeText={setMobileMoneyNumber}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.yellowButton]}
          onPress={() => setPaymentMethod('mobileMoney')}
        >
          <Text style={styles.buttonText}>Mobile Money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.visaButton]}
          onPress={() => setPaymentMethod('visa')}
        >
          <Text style={styles.buttonText}>Visa</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Make Payment</Text>
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: 'orange', 
    marginTop: 20,
  },
  yellowButton: {
    backgroundColor: 'yellow',
  },
  visaButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentPage;

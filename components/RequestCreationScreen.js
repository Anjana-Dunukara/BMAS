import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RequestCreationScreen = ({ navigation }) => {
  const [requestText, setRequestText] = useState('');

  const handleCreateRequest = () => {
    // Define the server endpoint where you will send the request.
    const serverEndpoint = 'http://127.0.0.1:3000/api/requests';

    // Create the request data (modify this structure according to your server's expectations).
    const requestData = { text: requestText };

    // Use Axios to send a POST request.
    axios
  .post(serverEndpoint, requestData)
  .then((response) => {
    // Request was successful
    console.log('Request created successfully');
  })
  .catch((error) => {
    // Handle request errors, including network errors and server errors.
    if (error.response) {
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      console.error('No response received');
    } else {
      console.error('Network Error:', error.message);
    }
  });

  };

  return (
    <View style={styles.container}>
      <Text>Create a Request</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your request"
        onChangeText={(text) => setRequestText(text)}
        value={requestText}
      />
      <Button title="Create Request" onPress={handleCreateRequest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default RequestCreationScreen;

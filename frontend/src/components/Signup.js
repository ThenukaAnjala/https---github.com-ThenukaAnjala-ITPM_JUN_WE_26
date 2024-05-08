import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reTypePassword, setReTypePassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [country, setCountry] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [secondaryContact, setSecondaryContact] = useState('');
    const [motherLanguage, setMotherLanguage] = useState('');
    const [gender, setGender] = useState('');
  
    const handleSignUp = () => {
      // Handle sign-up logic here
      console.log('Signing up...');
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Re-type Password"
          value={reTypePassword}
          onChangeText={setReTypePassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={contactNumber}
          onChangeText={setContactNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
        />
        <TextInput
          style={styles.input}
          placeholder="Blood Type"
          value={bloodType}
          onChangeText={setBloodType}
        />
        <TextInput
          style={styles.input}
          placeholder="Secondary Contact"
          value={secondaryContact}
          onChangeText={setSecondaryContact}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Mother Language"
          value={motherLanguage}
          onChangeText={setMotherLanguage}
        />
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
            onPress={() => setGender('male')}
          >
            <Text style={styles.genderButtonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
            onPress={() => setGender('female')}
          >
            <Text style={styles.genderButtonText}>Female</Text>
          </TouchableOpacity>
        </View>
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    genderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    genderButton: {
      backgroundColor: '#eee',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    selectedGender: {
      backgroundColor: '#007bff',
    },
    genderButtonText: {
      color: '#000',
    },
  });
  
  export default SignUpPage;
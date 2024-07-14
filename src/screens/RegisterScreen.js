import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      roles: role,
      phone: mobile,
      gender: '',
      birth_day: '',
      village: '',
      is_delete: '',
      deleted_at: '',
      district_id: '',
      store_id: ''
    };

    try {
      const response = await fetch('http://192.168.43.8:4200/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      // Clear input fields after successful registration
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setRole('');
      setMobile('');
      setError(null);
      // Navigate to GetUserScreen after successful registration
      navigation.navigate('GetUser');
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter your first name"
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter your last name"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Text style={styles.label}>Role</Text>
      <TextInput
        style={styles.input}
        value={role}
        onChangeText={setRole}
        placeholder="Enter your role"
      />
      <Text style={styles.label}>Mobile</Text>
      <TextInput
        style={styles.input}
        value={mobile}
        onChangeText={setMobile}
        placeholder="Enter your mobile number"
        keyboardType="phone-pad"
      />
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});

export default RegisterScreen;

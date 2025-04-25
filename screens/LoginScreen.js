import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { loginUser } from '../shared/api';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    if (!username || !email) {
      Alert.alert('Error', 'Please enter both username and email');
      return;
    }
    try {
      const user = await loginUser(username, email);
      console.log('Logged in user:', user);
      Alert.alert('Success', 'Account created/logged in successfully!');
      navigation.navigate('Calendar', { userId: user.id, username: user.username }); // Pass username
    } catch (error) {
      Alert.alert('Error', 'Failed to create/login account');
    }
  };

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#26A69A', '#4DB6AC']}
        style={styles.header}
      >
        <Animatable.View animation="bounceIn" duration={1500}>
          <Icon name="account-circle" size={100} color="#fff" style={styles.icon} />
        </Animatable.View>
      </LinearGradient>

      {/* Form Container */}
      <Animatable.View animation="fadeInUp" duration={1000} style={styles.formContainer}>
        <Input
          placeholder="Username"
          leftIcon={{ type: 'material-community', name: 'account', color: '#26A69A' }}
          value={username}
          onChangeText={setUsername}
          containerStyle={styles.input}
          inputStyle={styles.inputText}
          placeholderTextColor="#666"
        />
        <Input
          placeholder="Email"
          leftIcon={{ type: 'material-community', name: 'email', color: '#26A69A' }}
          value={email}
          onChangeText={setEmail}
          containerStyle={styles.input}
          inputStyle={styles.inputText}
          placeholderTextColor="#666"
        />
        <LinearGradient
          colors={['#FFCA28', '#FFB300']}
          style={styles.buttonGradient}
        >
          <Button
            title="Login / Sign Up"
            onPress={handleLogin}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
          />
        </LinearGradient>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  icon: {
    alignSelf: 'center',
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: -30,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  input: {
    marginBottom: 20,
  },
  inputText: {
    color: '#333',
    fontSize: 16,
  },
  buttonGradient: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LoginScreen;
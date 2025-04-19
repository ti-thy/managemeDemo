import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
      Alert.alert('Success', 'Account created/logged in successfully!');
      navigation.navigate('Calendar', { userId: user.id });
    } catch (error) {
      Alert.alert('Error', 'Failed to create/login account');
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={1000}>
        <Icon name="account-circle" size={80} color="#4CAF50" style={styles.icon} />
      </Animatable.View>
      <Animatable.View animation="fadeInUp" duration={1000} style={styles.form}>
        <Input
          placeholder="Username"
          leftIcon={{ type: 'material-community', name: 'account' }}
          value={username}
          onChangeText={setUsername}
          containerStyle={styles.input}
        />
        <Input
          placeholder="Email"
          leftIcon={{ type: 'material-community', name: 'email' }}
          value={email}
          onChangeText={setEmail}
          containerStyle={styles.input}
        />
        <Button
          title="Login / Sign Up"
          onPress={handleLogin}
          buttonStyle={styles.button}
        />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  icon: { alignSelf: 'center', marginBottom: 20 },
  form: { marginTop: 20 },
  input: { marginBottom: 15 },
  button: { backgroundColor: '#4CAF50', borderRadius: 10 },
});

export default LoginScreen;
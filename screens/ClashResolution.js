import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import EventCard from '../components/EventCard';

const ClashResolutionScreen = ({ route, navigation }) => {
  const { clashes } = route.params;

  const handleResolve = (selectedEvent) => {
    Alert.alert('Event Selected', `You chose: ${selectedEvent.summary}. Event scheduled successfully!`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeIn" duration={1000}>
        <Text style={styles.title}>Resolve Event Clashes</Text>
        {clashes.map((clash, index) => (
          <View key={index} style={styles.clashGroup}>
            <Text style={styles.clashText}>Clash {index + 1}</Text>
            <EventCard event={clash[0]} />
            <Button
              title={`Choose ${clash[0].summary}`}
              onPress={() => handleResolve(clash[0])}
              buttonStyle={styles.button}
            />
            <EventCard event={clash[1]} />
            <Button
              title={`Choose ${clash[1].summary}`}
              onPress={() => handleResolve(clash[1])}
              buttonStyle={styles.button}
            />
          </View>
        ))}
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  clashGroup: { marginBottom: 20 },
  clashText: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  button: { backgroundColor: '#4CAF50', marginVertical: 10, borderRadius: 10 },
});

export default ClashResolutionScreen;

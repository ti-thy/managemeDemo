import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EventCard = ({ event }) => {
  return (
    <Animatable.View animation="fadeIn" duration={1000} style={styles.cardContainer}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>
          <Icon name="calendar" size={24} color="#4CAF50" style={styles.icon} />
          {event.summary}
        </Card.Title>
        <Text style={styles.text}>From: {event.start}</Text>
        <Text style={styles.text}>To: {event.end}</Text>
        <Text style={styles.text}>Source: {event.email}</Text>
      </Card>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: { marginBottom: 10 },
  card: { borderRadius: 10, backgroundColor: '#f5f5f5' },
  title: { fontSize: 18, color: '#333', flexDirection: 'row', alignItems: 'center' },
  text: { fontSize: 14, color: '#666' },
  icon: { marginRight: 10 },
});

export default EventCard;
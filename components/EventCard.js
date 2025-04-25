import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns';

const EventCard = ({ event }) => {
  return (
    <Animatable.View animation="fadeIn" duration={1000} style={styles.cardContainer}>
      <LinearGradient
        colors={['#fff', '#F5F5F5']}
        style={styles.cardGradient}
      >
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.title}>
            <Icon name="calendar" size={24} color="#26A69A" style={styles.icon} />
            {event.summary}
          </Card.Title>
          <Text style={styles.text}>
            From: {format(new Date(event.start), 'MMM d, yyyy h:mm a')}
          </Text>
          <Text style={styles.text}>
            To: {format(new Date(event.end), 'h:mm a')}
          </Text>
          <Text style={styles.text}>Source: {event.email}</Text>
        </Card>
      </LinearGradient>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
  },
  cardGradient: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  card: {
    borderRadius: 10,
    backgroundColor: 'transparent',
    margin: 0,
    padding: 15,
    borderWidth: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
});

export default EventCard;
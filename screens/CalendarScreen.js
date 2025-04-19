import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchEvents, detectClashes } from '../shared/api';
import EventCard from '../components/EventCard';

const CalendarScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [events, setEvents] = useState([]);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const loadEvents = async () => {
      const userEvents = await fetchEvents(userId);
      setEvents(userEvents);

      // Mark dates on the calendar
      const marked = {};
      userEvents.forEach(event => {
        const date = event.start.split('T')[0];
        marked[date] = { marked: true, dotColor: 'blue' };
      });
      setMarkedDates(marked);

      // Detect clashes
      const clashes = detectClashes(userEvents);
      if (clashes.length > 0) {
        Alert.alert(
          'Event Clash Detected',
          'Some events are clashing. Please resolve them manually.',
          [
            { text: 'Resolve', onPress: () => navigation.navigate('ClashResolution', { clashes }) },
            { text: 'Ignore', onPress: () => {} },
          ]
        );
      } else {
        Alert.alert('Events Synced', 'Your events have been synchronized successfully!');
      }
    };
    loadEvents();
  }, [userId, navigation]);

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeIn" duration={1000}>
        <Text style={styles.title}>
          <Icon name="calendar" size={30} color="#4CAF50" /> Event Calendar
        </Text>
        <Calendar markedDates={markedDates} />
        <ScrollView style={styles.eventList}>
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  eventList: { marginTop: 20 },
});

export default CalendarScreen;
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

      const marked = {};
      userEvents.forEach(event => {
        const date = event.start.split('T')[0];
        marked[date] = { marked: true, dotColor: 'blue' };
      });
      setMarkedDates(marked);

      const clashes = detectClashes(userEvents);
      if (clashes.length > 0) {
        const clashDetails = clashes.map((clash, index) => {
          const event1 = clash[0];
          const event2 = clash[1];
          return `Clash ${index + 1}: ${event1.summary} (${event1.start} - ${event1.end}) vs ${event2.summary} (${event2.start} - ${event2.end})`;
        }).join('\n');
        
        Alert.alert(
          'Event Clashes Detected',
          `The following events are clashing:\n${clashDetails}`,
          [
            { text: 'Resolve', onPress: () => navigation.navigate('ClashResolution', { clashes }) },
            { text: 'View in Drawer', onPress: () => navigation.navigate('ClashDrawer', { clashes }) },
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
        <View style={styles.header}>
          <Icon
            name="menu"
            size={30}
            color="#4CAF50"
            onPress={() => navigation.openDrawer()}
            style={styles.menuIcon}
          />
          <Text style={styles.title}>
            <Icon name="calendar" size={30} color="#4CAF50" /> Event Calendar
          </Text>
        </View>
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
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  menuIcon: { marginRight: 10 },
  title: { fontSize: 24, fontWeight: 'bold', flexDirection: 'row', alignItems: 'center' },
  eventList: { marginTop: 20 },
});

export default CalendarScreen;
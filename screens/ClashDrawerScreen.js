import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const ClashDrawerScreen = ({ route, navigation }) => {
  const { clashes } = route.params || { clashes: [] };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Clashes</Text>
      {clashes.length === 0 ? (
        <Text style={styles.noClashes}>No clashes detected.</Text>
      ) : (
        <ScrollView>
          {clashes.map((clash, index) => (
            <Card key={index} containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>Clash {index + 1}</Card.Title>
              <Card.Divider />
              <Text style={styles.eventText}>
                Event 1: {clash[0].summary}
              </Text>
              <Text style={styles.eventText}>
                Time: {clash[0].start} - {clash[0].end}
              </Text>
              <Text style={styles.eventText}>
                Source: {clash[0].email}
              </Text>
              <Text style={styles.eventText}>
                Event 2: {clash[1].summary}
              </Text>
              <Text style={styles.eventText}>
                Time: {clash[1].start} - {clash[1].end}
              </Text>
              <Text style={styles.eventText}>
                Source: {clash[1].email}
              </Text>
            </Card>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  noClashes: { fontSize: 18, textAlign: 'center', color: '#666' },
  card: { borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 18 },
  eventText: { fontSize: 14, marginBottom: 5 },
});

export default ClashDrawerScreen;
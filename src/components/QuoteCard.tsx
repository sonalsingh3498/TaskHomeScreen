import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuoteCard = () => {
  const progressPercent = 65; // Dynamic value (0–100)

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Today’s Quote</Text>
      <Text style={styles.quote}>
        “You must do the things, you think you cannot do.”
      </Text>

      <View style={styles.progressSection}>
        <Text style={styles.progressText}>Progress {progressPercent}%</Text>

        <View style={styles.progressBarWrapper}>
          <View style={[styles.progressTrack]} />
          <View
            style={[styles.progressBar, { width: `${progressPercent}%` }]}
          />
          <View
            style={[
              styles.knob,
              { left: `${progressPercent - 2}%` }, // Slightly center the knob
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 390,
    height: 111,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'space-between',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
  },
  quote: {
    fontSize: 14,
    color: '#374151',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  progressSection: {
    marginTop: 8,
  },
  progressText: {
    color: '#1D169D',
    fontSize: 13,
    marginBottom: 4,
  },
  progressBarWrapper: {
    height: 8,
    width: '100%',
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  },
  progressTrack: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#e5e7eb',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#1D169D',
    borderRadius: 4,
  },
  knob: {
    position: 'absolute',
    top: -4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1D169D',
    shadowColor: '#1D169D',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
});

export default QuoteCard;

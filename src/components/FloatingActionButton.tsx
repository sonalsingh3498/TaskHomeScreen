import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import plusIcon from '../assets/plusIcon.png';

const FloatingActionButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity style={styles.fab} onPress={onPress}>
    <Image source={plusIcon} style={styles.icon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    backgroundColor: '#1D169D',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
  width: 60,
  height: 60,
  resizeMode: 'contain',
},
});

export default FloatingActionButton;

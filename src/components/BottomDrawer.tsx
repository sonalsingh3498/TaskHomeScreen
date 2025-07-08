import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const { height } = Dimensions.get('window');

const drawerOptions = [
  {
    label: 'Habit',
    icon: require('../assets/brain.png'),
    description: 'Activity that repeats over time it has detailed tracking and statistics.',
  },
  {
    label: 'Recurring Task',
    icon: require('../assets/DoubleArrow.png'),
    description: 'Activity that repeats over time it has detailed tracking and statistics.',
  },
  {
    label: 'Task',
    icon: require('../assets/DTick.png'),
    description: 'Single instance activity without tracking over time.',
  },
  {
    label: 'Goal of the Day',
    icon: require('../assets/goal.png'),
    description: 'A specific target set for oneself to achieve within a single day.',
  },
];

const arrowRight = require('../assets/Darrow.png'); // Your arrow icon

type BottomDrawerProps = {
  visible: boolean;
  onClose: () => void;
};

const BottomDrawer: React.FC<BottomDrawerProps> = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? height - 400 : height,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
      <Animated.View style={[styles.drawer, { top: slideAnim }]}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {drawerOptions.map((item, index) => (
            <View key={index}>
              <TouchableOpacity style={styles.option}>
                <Image source={item.icon} style={styles.icon} />
                <View style={styles.textWrapper}>
                  <Text style={styles.label}>{item.label}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
                <Image source={arrowRight} style={styles.arrowIcon} />
              </TouchableOpacity>
              {index < drawerOptions.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: '#00000055',
  },
  drawer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 400,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 16,
    resizeMode: 'contain',
    marginTop: 4,
  },
  textWrapper: {
    flex: 1,
    paddingRight: 10,
  },
  label: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 1,
  },
  arrowIcon: {
    alignSelf: 'center',
    tintColor: '#151F73',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    // marginTop: 1,
    // marginBottom: 1,
  },
});

export default BottomDrawer;

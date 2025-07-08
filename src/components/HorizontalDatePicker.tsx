import { useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

type DateItem = {
  day: string;
  date: string;
  fullDate: string;
};

const generateWeekDates = (): DateItem[] => {
  const start = new Date();
  const weekDates: DateItem[] = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);

    const dayName = currentDate.toLocaleString('en-US', { weekday: 'short' });
    const dayNum = currentDate.getDate().toString();
    const fullDate = currentDate.toISOString().split('T')[0];

    weekDates.push({ day: dayName, date: dayNum, fullDate });
  }

  return weekDates;
};

const HorizontalDatePicker = () => {
  const [weekDates, setWeekDates] = useState<DateItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');

  useEffect(() => {
    const generatedDates = generateWeekDates();
    setWeekDates(generatedDates);

    const today = new Date().toISOString().split('T')[0];
    const foundToday = generatedDates.find((item) => item.fullDate === today);
    setSelectedDate(foundToday ? foundToday.fullDate : generatedDates[0].fullDate);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={weekDates}
        keyExtractor={(item) => item.fullDate}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSelected = selectedDate === item.fullDate;

          return (
            <TouchableOpacity
              style={styles.touchWrapper}
              onPress={() => setSelectedDate(item.fullDate)}
            >
              <View
                style={[
                  styles.card,
                  { backgroundColor: isSelected ? '#3A2FB5' : '#F3F3F3' },
                ]}
              >
                <View style={styles.topHalf}>
                  <Text style={[styles.dayText, isSelected && styles.selectedText]}>
                    {item.day}
                  </Text>
                </View>
                <View
                  style={[
                    styles.bottomHalf,
                    { backgroundColor: isSelected ? '#1D169D' : '#E0E0E0' },
                  ]}
                >
                  <Text style={[styles.dateText, isSelected && styles.selectedText]}>
                    {item.date}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  touchWrapper: {
    marginRight: 10,
  },
  card: {
    width: 56,
    height: 72,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#F3F3F3', // default unselected top background
  },
  topHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // no bg color, card color shows through
  },
  bottomHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 16, // overlay look for bottom background
    borderTopRightRadius: 16,
  },
  dayText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});

export default HorizontalDatePicker;

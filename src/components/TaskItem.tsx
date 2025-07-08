import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type TaskItemProps = {
  icon: any;
  title: string;
  time: string;
  timeColor?: string;
  tags: string[];
  flagIcon?: any;
  statusIcon?: any;
};

const TaskItem: React.FC<TaskItemProps> = ({
  icon,
  title,
  time,
  timeColor = '#1D4ED8',
  tags,
  flagIcon,
  statusIcon,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.avatar} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <View style={[styles.timeBox, { backgroundColor: `${timeColor}20` }]}>
            <View style={styles.timeContent}>
              <Image source={require('../assets/gala_clock.png')} style={styles.timeIcon} />
              <Image source={require('../assets/timeBottel.png')} style={styles.timeIcon} />
              <Text style={[styles.timeText, { color: timeColor }]}>{time}</Text>
            </View>
          </View>

          {tags.map((tag, index) => (
            <View key={index} style={styles.tagBox}>
              <Text style={styles.tagText}>{tag}</Text>
              {index < tags.length - 1 && <Text style={styles.separator}>|</Text>}
            </View>
          ))}

          {flagIcon && <Image source={flagIcon} style={styles.timeIcon} />}
        </View>
      </View>

      {statusIcon && (
        <TouchableOpacity>
          <Image source={statusIcon} style={styles.statusIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    paddingRight: 12,
    paddingLeft: 4,
    height: 100,
    width: 414.5,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 24,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBox: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  timeText: {
    fontSize: 13,
    fontWeight: '600',
  },
  tagBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    fontSize: 13,
    color: '#444',
  },
  separator: {
    fontSize: 13,
    marginHorizontal: 4,
    color: '#999',
  },
  statusIcon: {
    width: 25,
    height: 25,
  },
  timeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
    resizeMode: 'contain',
  },
});

export default TaskItem;

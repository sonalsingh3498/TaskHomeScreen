import React from 'react';
import { SafeAreaView } from 'react-native';
import HorizontalDatePicker from '../components/HorizontalDatePicker';
import Header from '../components/Header';
import QuoteCard from '../components/QuoteCard';
import TaskItem from '../components/TaskItem';
import TaskData from '../data/TaskData';
import { useState } from 'react';

import BottomDrawer from '../components/BottomDrawer';
import FloatingActionButton from '../components/FloatingActionButton';

const HomeScreen = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <SafeAreaView>
        <Header/>
      <HorizontalDatePicker />
      <QuoteCard/>
      {TaskData.map((item, index) => (
 <TaskItem
        key={index}
        icon={item.icon}
        title={item.title}
        time={item.time}
        timeColor={item.timeColor}
        tags={item.tags}
        flagIcon={item.flagIcon}
        statusIcon={item.statusIcon}
      />
      
      )
      )

      }
      
 <FloatingActionButton onPress={() => setDrawerVisible(true)} />
      <BottomDrawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
    </SafeAreaView>
  );
};

export default HomeScreen;

/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import MonthFormat from './src/components/MonthFormat';
import CalendarHeader from './src/components/CalendarHeader';

const App = () => {
  const [today, setDate] = useState(new Date());

  const ChangeDate = (newMonth, newYear) => {
    today.setFullYear(newYear);
    today.setMonth(newMonth - 1);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.calendarHeader}>
        <CalendarHeader date={today} onDateChange={ChangeDate}></CalendarHeader>
      </View>
      <View style={styles.sectionContainer}>
        <MonthFormat date={today}></MonthFormat>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  calendarHeader: {
    justifyContent: 'center',
    backgroundColor: '#2196F3',
  },
  months: {
    textAlign: 'center',
  },
  sectionContainer: {
    paddingHorizontal: 10,
  },
  calendarDays: {
    alignItems: 'stretch',
  },
});

export default App;

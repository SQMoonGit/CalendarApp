/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import MonthFormat from './src/components/MonthFormat';
import CalendarHeader from './src/components/CalendarHeader';

const App = () => {
  const today = new Date();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.calendarHeader}>
        <CalendarHeader date={today}></CalendarHeader>
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

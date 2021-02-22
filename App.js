/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';
import MonthFormat from './src/components/MonthFormat';

const CalendarDays = (props) => {
  let days = [];
  for (let x = 1; x < 32; x++) {
    days.push(
      <Button
        style={{paddingHorizontal: 32, marginHorizontal: 32}}
        key={x}
        title={x.toString()}></Button>,
    );
  }
  return <Text>{days}</Text>;
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.calendarHeader}>
          <Button style={styles.months} title="<"></Button>
          <Button style={styles.months} title="Month"></Button>
          <Button style={styles.months} title="Year"></Button>
          <Button style={styles.months} title=">"></Button>
        </View>
        <View style={styles.sectionContainer}>
          {/* <DayButton title="something" color="blue"></DayButton> */}
          {/* <CalendarDays style={styles.calendarDays}></CalendarDays> */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  calendarHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
  },
  months: {
    textAlign: 'center',
    // alignItems: 'stretch',
  },
  body: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  sectionContainer: {
    flex: 4,
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  calendarDays: {
    alignItems: 'stretch',
  },
});

export default App;

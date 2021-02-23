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
          <MonthFormat></MonthFormat>
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
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionContainer: {
    paddingHorizontal: 10,
    flex: 4,
  },
  calendarDays: {
    alignItems: 'stretch',
  },
});

export default App;

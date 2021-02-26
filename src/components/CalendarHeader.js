import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Wrapper = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  margin-vertical: 16px;
  width: 100px;
  height: auto;
`;

const WeekdayRow = styled.Text`
  flex-direction: row;
  text-align: center;
  width: 58%;
  height: 100%;
`;

const styles = StyleSheet.create({
  menuButtons: {
    margin: 'auto',
    padding: 'auto',
    color: 'black',
    alignSelf: 'center',
    width: '100%',
  },
  menuText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

const WeekDisplay = () => {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return weekdays.map((x, i) => {
    return <WeekdayRow key={i}>{x}</WeekdayRow>;
  });
};

const MenuButton = (props) => {
  return (
    <TouchableOpacity
      style={props.style ? props.style : styles.menuButtons}
      onPress={props.onPress}
      active={props.active}>
      <Text style={styles.menuText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const CalendarHeader = (props) => {
  const month = props.date.getMonth();
  const year = props.date.getFullYear();
  return (
    <View>
      <Wrapper>
        <MenuButton text="<"></MenuButton>
        <MenuButton text={Months[month]}></MenuButton>
        <MenuButton text={year}></MenuButton>
        <MenuButton text=">"></MenuButton>
      </Wrapper>
      <Wrapper>
        <WeekDisplay></WeekDisplay>
      </Wrapper>
    </View>
  );
};

export default CalendarHeader;

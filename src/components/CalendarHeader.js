import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
  width: 100px;
  height: 80px;
  align-self: center;
  justify-content: center;
`;

const WeekdayRow = styled.Text`
  flex-direction: row;
  width: 60%;
  height: 100%;
  text-align: center;
`;

const styles = StyleSheet.create({
  menuButtons: {
    padding: 20,
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
        <MenuButton text={month}></MenuButton>
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

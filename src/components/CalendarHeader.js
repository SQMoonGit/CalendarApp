import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
  width: 100px;
  height: 80px;
  align-self: center;
  justify-content: center;
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

const CalendarHeader = () => {
  return (
    <Wrapper>
      <MenuButton text="<"></MenuButton>
      <MenuButton text="Month"></MenuButton>
      <MenuButton text="Year"></MenuButton>
      <MenuButton text=">"></MenuButton>
    </Wrapper>
  );
};

export default CalendarHeader;

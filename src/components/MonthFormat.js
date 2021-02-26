import DayButton from './DayButton';
import {StyleSheet} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  align-self: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Row = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`;

const styles = StyleSheet.create({
  borderSide: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  borderTop: {
    borderTopWidth: 0,
  },
});

const MonthFormat = (props) => {
  const daysInMonth = new Date(
    props.date.getFullYear(),
    props.date.getMonth(),
    0,
  ).getDate();
  let days = [];
  for (let x = 1; x <= daysInMonth; x++) {
    if (x % 7 === 1) {
      days.push(
        <DayButton
          style={styles.borderTop}
          key={x}
          title={x.toString()}></DayButton>,
      );
    } else {
      days.push(
        <DayButton
          style={styles.borderSide}
          key={x}
          title={x.toString()}></DayButton>,
      );
    }
  }

  return (
    <Wrapper>
      <Row>{days}</Row>
    </Wrapper>
  );
};

export default MonthFormat;

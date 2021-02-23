import DayButton from './DayButton';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  color: #002366;
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MonthFormat = () => {
  const today = new Date();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    0,
  ).getDate();
  let days = [];
  for (let x = 1; x <= daysInMonth; x++) {
    days.push(
      <DayButton color="gold" key={x} title={x.toString()}></DayButton>,
    );
  }

  return <Wrapper>{days}</Wrapper>;
};

export default MonthFormat;

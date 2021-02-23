import DayButton from './DayButton';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  backgroundcolor: #002366;
  height: 500px;
  width: 500px;
`;

const MonthFormat = (props) => {
  const daysInMonth = () => {
    return new Date(props.year, props.month, 0).getDate();
  };

  return <Wrapper></Wrapper>;
};

export default MonthFormat;

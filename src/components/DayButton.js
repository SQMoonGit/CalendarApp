import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  border: 0.5px solid black;
  width: 14%;
  height: 100%;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 12px;
`;

const DayButton = (props) => {
  return (
    <Wrapper
      activeOpacity={props.opacity}
      onPress={props.onPress}
      active={props.active}
      style={{backgroundColor: props.color}}>
      <Title style={{color: 'black'}}>{props.title}</Title>
    </Wrapper>
  );
};

export default DayButton;

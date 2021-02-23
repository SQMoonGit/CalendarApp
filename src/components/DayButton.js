import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  margin: 2px 0 0 2px;
  border: 1px solid blue;
  border-radius: 4px;
  width: 80px;
  height: 80px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 12px;
`;

const DayButton = (props) => {
  return (
    <Wrapper
      onPress={props.onPress}
      active={props.active}
      style={{backgroundColor: props.color}}>
      <Title style={{color: 'black'}}>{props.title}</Title>
    </Wrapper>
  );
};

export default DayButton;

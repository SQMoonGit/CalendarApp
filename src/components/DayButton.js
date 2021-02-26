import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  flex-basis: 14.2%;
  min-height: 100px;
  border: 0.5px solid black;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 12px;
`;

const DayButton = (props) => {
  return (
    <Wrapper
      activeOpacity={props.opacity ? props.opacity : 0.6}
      onPress={props.onPress}
      active={props.active}
      style={props.style ? props.style : {backgroundColor: 'white'}}>
      <Title style={{color: 'black'}}>{props.title}</Title>
    </Wrapper>
  );
};

export default DayButton;

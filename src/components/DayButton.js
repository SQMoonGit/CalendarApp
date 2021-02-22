import React from 'react';
import {useTheme} from '@react-navigation/native';
import styled from 'styled-components';

// background: ${({active}) => (props.active ? 'blue' : '#FFF')};

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 12px;
`;
// {
//   title, onPress, active, color;
// }
const DayButton = (props) => {
  const {colors} = useTheme();
  const localColors =
    props.color === 'accent' || props.active
      ? {background: colors.accent, color: '#FFF'}
      : {background: colors.background, color: colors.text};
  return (
    <Wrapper
      onPress={props.onPress}
      active={props.active}
      style={{backgroundColor: localColors.background}}>
      <Title style={{color: localColors.color}}>{props.title}</Title>
    </Wrapper>
  );
};

export default DayButton;
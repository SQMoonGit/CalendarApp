import 'react-native';
import 'react-native';
import React from 'react';
import DayButton from '../src/components/DayButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<DayButton />);
});

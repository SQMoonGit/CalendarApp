import 'react-native';
import 'react-native';
import React from 'react';
import MonthFormat from '../src/components/MonthFormat';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<MonthFormat />);
});

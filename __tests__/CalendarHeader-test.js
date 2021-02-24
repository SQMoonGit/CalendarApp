import 'react-native';
import 'react-native';
import React from 'react';
import CalendarHeader from '../src/components/CalendarHeader';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<CalendarHeader />);
});

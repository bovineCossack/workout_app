import React from 'react';
import Exercise from './Exercise';

export function Default() {
  return (
    <Exercise>
      <p>Pull Up</p>
      <p>Back</p>
      <p>Biceps</p>
    </Exercise>
  );
}

export default {
  title: 'Exercise',
  component: Exercise,
};

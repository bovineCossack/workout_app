import React from 'react';
import Button from './Button';

export function Default() {
  return (
    <Button
      handleClick={() => {
        //
      }}
    >
      My Button
    </Button>
  );
}

export default {
  title: 'Button',
  component: Button,
};

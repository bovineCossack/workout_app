import React from 'react';
import Button from '../Button/Button';
import FlexBox from './FlexBox';

export function Default() {
  return (
    <FlexBox>
      <Button> FlexBox Button </Button>
      <Button> FlexBox Button </Button>
      <Button> FlexBox Button </Button>
    </FlexBox>
  );
}

export default {
  title: 'FlexBox',
  component: FlexBox,
};

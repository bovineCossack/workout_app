import React from 'react';
import Button from '../Button/Button';
import Grid from './Grid';

export function Default() {
  return (
    <Grid>
      <Button> Grid Button </Button>
      <Button> Grid Button </Button>
      <Button> Grid Button </Button>
    </Grid>
  );
}

export default {
  title: 'Grid',
  component: Grid,
};

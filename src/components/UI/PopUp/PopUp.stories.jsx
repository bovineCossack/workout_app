import React from 'react';
import PopUp from './PopUp';

export function Default() {
  <PopUp
    handleClose={() => {
      console.log('hello');
    }}
  >
    Stuff Here
  </PopUp>;
}

export default {
  title: 'PopUp',
  component: PopUp,
};

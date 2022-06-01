import React from 'react';
import InputBox from './InputBox';

export default {
  title: 'InputBox',
  component: InputBox,
};

export const Default = () => (
  <InputBox
    label="Pulling"
    name="Exercise"
    placeholder="Pull-Up"
    handleChange={() => {
      //   console.log('Test');
    }}
  />
);

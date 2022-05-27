import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
};

export const Primary = () => <Navigation to="/register">Register</Navigation>;

import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => (
  <Typewriter
    options={{
      strings: ['MERN Stack Developer', 'Continuously Learning'],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
);

export default Type;

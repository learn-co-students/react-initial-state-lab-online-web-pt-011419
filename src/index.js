import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider.js';
import Bomb from './Bomb.js';

ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('root')
);

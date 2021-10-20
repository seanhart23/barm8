import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav/nav.js'
import Section1 from './components/section-1/section-1.js'
import Section2 from './components/section-2/section-2.js'
import Section3 from './components/section-3/section-3.js'
import Section4 from './components/section-4/section-4.js'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div id='top'></div>
    <Nav />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
  </React.StrictMode>,
  document.getElementById('root')
);



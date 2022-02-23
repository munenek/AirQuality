import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';

export const sections = [
  { title: 'English', url: '/en-us' },
  { title: 'Hindu', url: '/hi-in' },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header title="The Cigarette Magazine" sections={sections} />
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

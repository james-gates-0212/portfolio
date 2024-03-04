import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

const isDevelopmentMode = process.env.NODE_ENV === 'development';
const isProductionMode = process.env.NODE_ENV === 'production';

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
if (isDevelopmentMode) {
  root.render(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
  );
}

if (isProductionMode) {
  root.render(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

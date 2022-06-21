import ReactDOM from 'react-dom';
import App from './src/App';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './src/styles/styles.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

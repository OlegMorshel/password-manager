import classNames from 'classnames/bind';
import React from 'react';
import styles from './App.module.scss';
const cnb = classNames.bind(styles);
import { LogoSvg } from './assets/Icons';
function App() {
  return (
    <div className={cnb('App')}>
      <header className={cnb('App-header')}>
        <div className={cnb('icon')}>
          <LogoSvg />
        </div>
        <p className={cnb('text')}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={cnb('App-link')} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

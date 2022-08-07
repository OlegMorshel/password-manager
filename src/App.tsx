import classNames from 'classnames/bind';
import React from 'react';
import styles from './App.module.scss';
const cnb = classNames.bind(styles);
function App() {
  return <div className={cnb('App')}>Template</div>;
}

export default App;

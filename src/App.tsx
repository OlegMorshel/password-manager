import classNames from 'classnames/bind'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Loader from './components/UiKit/Loader/Loader'
const cnb = classNames.bind(styles)

const AuthorizationWrapper = React.lazy(
  () => import(/* webpackChunkName: "Main", webpackPrefetch: true */ './pages/Authorization/AuthorizationWrapper')
)
const App = () => {
  return (
    <Suspense
      fallback={
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/auth" element={<AuthorizationWrapper />} />
      </Routes>
    </Suspense>
  )
}

export default App

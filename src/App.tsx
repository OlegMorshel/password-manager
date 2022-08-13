import classNames from 'classnames/bind'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Loader from './components/UiKit/Loader/Loader'
import { MainPageEnum } from './pages/MainPageWrapper/MainPageWrapper'
const cnb = classNames.bind(styles)

const AuthorizationWrapper = React.lazy(
  () => import(/* webpackChunkName: "Main", webpackPrefetch: true */ './pages/Authorization/AuthorizationWrapper')
)
const MainPageWrapper = React.lazy(
  () => import(/* webpackChunkName: "Main", webpackPrefetch: true */ './pages/MainPageWrapper/MainPageWrapper')
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
        <Route path="/" element={<MainPageWrapper type={MainPageEnum.CREATED_NOTES} />} />
        <Route path="/passwordCollections" element={<MainPageWrapper type={MainPageEnum.CREATED_NOTES} />} />
        <Route path="/observeNotes" element={<MainPageWrapper type={MainPageEnum.CREATED_NOTE_OBSERVE} />} />
        <Route path="/addGroup" element={<MainPageWrapper type={MainPageEnum.ADD_NEW_NOTE_GROUP} />} />
        <Route path="/configurePassword" element={<MainPageWrapper type={MainPageEnum.CREATE_PASSWORD} />} />
        <Route path="/profile" element={<MainPageWrapper type={MainPageEnum.PROFILE_SETTINGS} />} />
      </Routes>
    </Suspense>
  )
}

export default App

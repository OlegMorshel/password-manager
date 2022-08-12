import ReactDOM from 'react-dom'
import App from './src/App'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './src/styles/styles.scss'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import { BrowserRouter } from 'react-router-dom'
import NotificationsProvider from '@src/providers/NotificationsProvider'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </BrowserRouter>
  </Provider>
)

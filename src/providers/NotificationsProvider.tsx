import classNames from 'classnames/bind'
import React, { ReactElement, ReactText } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './NotificationsProvider.module.scss'
const cnb = classNames.bind(styles)
export enum ToastType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  DARK = 'DARK',
  WARN = 'WARN',
}
interface INotificationsProps {
  children: React.ReactNode
}
export const createNotification = (type: ToastType, message: string): ReactText | null => {
  switch (type) {
    case ToastType.INFO:
      return toast.info(message)
    case ToastType.SUCCESS:
      return toast.success(message)
    case ToastType.WARN:
      return toast.warning(message)
    case ToastType.ERROR:
      return toast.error(message)
    case ToastType.DARK:
      return toast.dark(message)
    default:
      return null
  }
}

const NotificationsProvider: React.FC<INotificationsProps> = ({ children }): ReactElement => {
  return (
    <>
      <ToastContainer
        theme="light"
        progressClassName={cnb('progressBar')}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </>
  )
}

export default NotificationsProvider

import classNames from 'classnames/bind'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import useClickOutside from '@src/hooks/useClickOutside'
import { CheckSignSvg, CloseInCircleSvg, CloseSvg, FlatArrowSvg } from '@src/icons/Icons'
import { FormikSetFieldTouched } from '@src/utils/commonTypes'
import { isScrollbarVisible } from '@src/utils/isScrollBarVisible'
import { checkErrorAndTouched } from '@src/utils/validationUtils'
import Loader from '../Loader/Loader'
import Styles from './Dropdown.module.scss'

const cnb = classNames.bind(Styles)
type Props<TValue extends string = string> = {
  type: 'singleSelect'
  title: string
  list: DropdownItem<TValue>[] | Readonly<DropdownItem<TValue>[]>
  /***
   * массив ID элементов из list
   */
  selected: DropdownValue<TValue>
  /***
   * присваивает массив ID элементов из list
   */
  setSelected: (newValue: DropdownValue<TValue>) => void
  classNameForWrapper?: string
  error?: string | string[]
  touched?: boolean
  name?: string
  /**
   * Отрабатывает на поле с именем name
   */
  setFieldTouched?: FormikSetFieldTouched
  disabled?: boolean
  onFinishScroll?: () => void
  isCompanies?: boolean
  hideClearButton?: boolean
  hideValueField?: boolean
  isOpen?: boolean
  handleClose?: () => void
  wrapperRef?: React.RefObject<HTMLDivElement>
  isLoading?: boolean
  toTop?: boolean
}

export type DropdownValue<T extends string = string> = T[]
export type DropdownItem<T extends string = string> = {
  id: T
  /**
   * Отображаемое название элемента
   */
  name: string
  /**
   * Адрес компании
   */
  address?: { main: string }
  /**
   * Тип компании
   */
  type?: { name: string }
}

function Dropdown<TValue extends string = string>({
  type,
  title,
  classNameForWrapper,
  error,
  touched,
  setFieldTouched,
  name,
  list,
  selected,
  setSelected,
  disabled,
  onFinishScroll,
  isCompanies,
  hideClearButton,
  isLoading,
  toTop,

  hideValueField,
  isOpen: isOpenProps,
  handleClose: handleCloseProps,
  wrapperRef: wrapperRefProps,

  ...props
}: Props<TValue>): JSX.Element {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const listRef = React.useRef<HTMLDivElement>(null)
  const verticalListRef = React.useRef(null)

  const [isOpen, setOpen] = useState(false)
  const [isHorizontalScrollVisible, setHorizontalScrollVisible] = useState(false)
  const [isVerticalScrollVisible, setVerticalScrollVisible] = useState(true)

  const handleTouched = () => {
    if (!touched && name) {
      setFieldTouched?.(name, true, false)
    }
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    if (isOpenProps !== undefined && isOpenProps) return

    setOpen(prevState => {
      if (prevState) {
        handleTouched()
      }
      return false
    })
    handleCloseProps?.()
  }

  React.useEffect(() => {
    if (isOpenProps === undefined) return

    if (isOpenProps) {
      handleOpen()
      return
    }
    handleClose()
    return
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenProps])

  const singleSelect = type === 'singleSelect'

  useClickOutside(wrapperRefProps ?? wrapperRef, () => {
    handleClose()
  })

  const toggle = () => {
    if (isOpen) {
      handleClose()
    } else {
      handleOpen()
    }
  }

  const isItemSelected = (id: string): boolean => !!selected.find(item => item === id)

  const handleSelect = (id: TValue, e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>): void => {
    if (!singleSelect) {
      e.stopPropagation()
      const prev = selected
      if (prev.find(item => item === id)) {
        setSelected(prev.filter(item => item !== id))
        return
      }
      setSelected(prev.concat(id))
      return
    }
    setSelected([id])
    return
  }

  const onScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    if (onFinishScroll && e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight) {
      onFinishScroll()
    }
  }

  const handleClear: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation()
    setSelected([])
  }

  useEffect(() => {
    if (singleSelect) {
      return
    }
    setHorizontalScrollVisible(isScrollbarVisible(listRef, 'horizontal'))
  }, [selected, singleSelect])

  useEffect(() => {
    if (isOpen) {
      setVerticalScrollVisible(isScrollbarVisible(verticalListRef, 'vertical'))
    }
  }, [isOpen])

  const isError: boolean = checkErrorAndTouched(!!error, !!touched, !!setFieldTouched)

  const getTopDropdownStyles = () => {
    switch (list.length) {
      case 1:
        return 'one'
      case 2:
        return 'two'
      case 3:
        return 'three'
      case 4:
        return 'four'
      case 5:
        return 'five'
      case 6:
        return 'six'

      default:
        return 'max'
    }
  }

  return (
    <div className={cnb('container', classNameForWrapper, { hideValueField: hideValueField })}>
      <div
        ref={wrapperRef}
        className={cnb(
          'wrapper',
          { error: isError },
          { open: isOpen },
          { disabled: disabled || isLoading },
          { hasSelected: selected.length }
        )}
        onClick={() => !disabled && !isLoading && toggle()}
        {...props}
      >
        {!hideValueField && (
          <div className={cnb('icon', { open: isOpen }, { disabled: disabled || isLoading }, { hasSelected: selected.length })}>
            <FlatArrowSvg />
          </div>
        )}

        {!hideClearButton && !hideValueField && !!selected.length && (
          <div
            className={cnb('icon', 'clear', { disabled: disabled || isLoading }, { hasSelected: selected.length })}
            onClick={e => (!disabled ? handleClear(e) : null)}
          >
            <CloseSvg />
          </div>
        )}

        {!hideValueField && (
          <>
            {isLoading ? (
              <div className={cnb('isLoading')}>
                <Loader small />
              </div>
            ) : (
              <div className={cnb('title', { open: isOpen }, { hasSelected: selected.length })}>
                {(singleSelect && title) || (!singleSelect && selected.length === 0 && title)}
              </div>
            )}
          </>
        )}

        <div className={cnb('listWrapper', { open: isOpen }, { noScroll: !isVerticalScrollVisible }, { toTop }, getTopDropdownStyles())}>
          <div className={cnb('list')} onScroll={e => onScrollHandler(e)} ref={verticalListRef}>
            {isOpen &&
              list.map(item => {
                return (
                  <div
                    className={cnb(
                      'item',
                      { open: isOpen },
                      { selected: isItemSelected(item.id) },
                      { noScroll: !isVerticalScrollVisible },
                      { isCompanies }
                    )}
                    onClick={e => handleSelect(item.id, e)}
                    key={item.id}
                  >
                    {isCompanies && <div className={cnb('companyType')}>{item?.type?.name}</div>}
                    <div className={cnb({ companyName: isCompanies }, { selected: isItemSelected(item.id) && isCompanies })}>
                      {item.name}
                    </div>
                    {isCompanies && <div className={cnb('companyAddress')}>{item?.address?.main}</div>}
                    {isItemSelected(item.id) && (
                      <div className={cnb('check')}>
                        <CheckSignSvg />
                      </div>
                    )}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown

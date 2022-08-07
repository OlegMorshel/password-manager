import classNames from 'classnames/bind'
import React from 'react'
import Loader from '../Loader/Loader'
import Styles from './Button.module.scss'

const cnb = classNames.bind(Styles)

interface PaddingProps {
  left?: number
  right?: number
  top?: number
  bottom?: number
}

interface ButtonProps {
  title?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  name?: string
  className?: string
  theme?: ButtonThemes
  size?: ButtonSize
  loading?: boolean
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  disabled?: boolean
  shape?: ShapeType
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  fontSize?: FontsSize
  padding?: PaddingProps
}

export enum ShapeType {
  ROUND = 'ROUND',
}

export enum ButtonThemes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  BORDERED = 'BORDERED',
  DARK = 'DARK',
  TRANSPARENT = 'TRANSPARENT',
  TRANSPARENT_BORDERED = 'TRANSPARENT_BORDERED',
  TRANSPARENT_GRAYBORDER = 'TRANSPARENT_GRAYBORDER',
  TERTIARY_COLORFUL = 'TERTIARY_COLORFUL',
}

export enum ButtonSize {
  LARGE = 'LARGE',
  NORMAL = 'NORMAL',
  SMALL = 'SMALL',
  SMALLER = 'SMALLER',
  EXTRASMALL = 'EXTRASMALL',
}

export enum FontsSize {
  NORMAL = 'NORMAL', // 16px
  BIGGER = 'BIGGER', // 18px
}

export default function Button({
  title,
  className,
  name,
  size,
  shape,
  theme = ButtonThemes.PRIMARY,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  onClick,
  fontSize = FontsSize.NORMAL,
  type = 'button',
  padding,
  ...props
}: ButtonProps): React.ReactElement {
  const getSizeClassName = (sizeLocal?: ButtonSize): string | undefined => {
    switch (sizeLocal) {
      case ButtonSize.LARGE:
        return 'large'
      case ButtonSize.SMALL:
        return 'small'
      case ButtonSize.SMALLER:
        return 'smaller'
      case ButtonSize.EXTRASMALL:
        return 'extraSmall'
      default:
        return
    }
  }

  const getPaddingStyle = (paddingLocal?: PaddingProps): React.CSSProperties => {
    const constructValue = (value?: number): string | undefined => {
      if (!value) return
      return value + 'px'
    }
    if (!paddingLocal) return {}
    return {
      paddingTop: constructValue(paddingLocal.top),
      paddingRight: constructValue(paddingLocal.right),
      paddingBottom: constructValue(paddingLocal.bottom),
      paddingLeft: constructValue(paddingLocal.left),
    }
  }

  return (
    <button
      className={cnb(className, 'button', 'greenTheme', getSizeClassName(size), { round: shape === ShapeType.ROUND }, { disabled })}
      type={type}
      onClick={e => onClick?.(e)}
      disabled={disabled || loading}
      name={name}
      style={{ ...getPaddingStyle(padding) }}
      {...props}
    >
      {loading ? (
        <div className={cnb('loader')}>
          <Loader small white={theme === ButtonThemes.PRIMARY} />
        </div>
      ) : (
        <div className={cnb('buttonInner')}>
          {iconLeft && <span className={cnb('icon')}>{iconLeft}</span>}
          {title && (
            <span
              className={cnb(
                'title',
                { iconLeft },
                { iconRight },
                { fontSizeBigger: fontSize === FontsSize.BIGGER },
                { fontSizeNormal: fontSize === FontsSize.NORMAL }
              )}
            >
              {title}
            </span>
          )}
          {iconRight && <span className={cnb('icon')}>{iconRight}</span>}
        </div>
      )}
    </button>
  )
}

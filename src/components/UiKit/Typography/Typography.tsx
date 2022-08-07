import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
// import { ThemeStateType } from "store/reducers/ThemeReducer/types";
// import { RootState } from "store/store";
import defaultS from './Default.module.scss'
import largeS from './Large.module.scss'
import mediumS from './Med.module.scss'
import smallS from './Small.module.scss'
import { ThemeStateType } from './typographyTypes'

export enum TagType {
  h6 = 'h6',
  h5 = 'h5',
  h4 = 'h4',
  h3 = 'h3',
  h2 = 'h2',
  h1 = 'h1',
  p1 = 'p',
  p2 = 'p',
  p3 = 'p',
  p4 = 'p',
}

export enum VariantType {
  regular = '',
  medium = 'medium',
  bold = 'bold',
}

// HTMLHeadingElement required due to align attribute
type OmitedElement = Omit<React.HTMLProps<HTMLHeadingElement>, 'children' | 'style'>
interface TypographyProps extends OmitedElement {
  readonly tag: keyof typeof TagType
  readonly variant?: keyof typeof VariantType
  readonly className?: string
  readonly children?: React.ReactNode
  readonly customColorForTheme?: string
}

// Forward ref for easy access if needed
const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ tag, variant = 'regular', children, className, customColorForTheme, ...props }, ref) => {
    const selectedTheme = useSelector((state: RootState) => state.theme)

    function selectClassGroup(theme: ThemeStateType) {
      switch (theme?.fontSize) {
        case 'small':
          return smallS
        case 'medium':
          return mediumS
        case 'large':
          return largeS
        default:
          return defaultS
      }
    }

    const selectedStyles = React.useMemo(() => selectClassGroup(selectedTheme), [selectedTheme])
    const classComputed = React.useMemo(
      () => `${selectedStyles[tag]} ${selectedStyles[variant]} ${className}`,
      [className, selectedStyles, tag, variant]
    )
    const Component = TagType[tag]

    // FIXME: Bad solution but should work right now

    return (
      <Component ref={ref} className={classComputed} {...props}>
        {/* <Component ref={ref} {...props} className={className}> */}
        {children}
      </Component>
    )
  }
)

Typography.displayName = 'Typography'
export default Typography

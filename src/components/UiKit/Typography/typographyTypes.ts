export enum FontSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum SiteColor {
  white = 'white',
  black = 'black',
  blue = 'blue',
}

export enum ImageState {
  normal = 'normal',
  hidden = 'hidden',
}

export interface ThemeStateObject {
  fontSize: FontSize
  siteColor: SiteColor
  imageType: ImageState
}

export type ThemeStateType = ThemeStateObject | undefined

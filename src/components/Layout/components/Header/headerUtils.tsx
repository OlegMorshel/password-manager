import { UrlPageParamToPages } from '@src/pages/MainPageWrapper/MainPageWrapper'

export const getHeaderTitle = ({ pathName }: { pathName: string }) => {
  switch (pathName) {
    case UrlPageParamToPages.PASSWORD_MANAGER:
      return 'Securel'
    case UrlPageParamToPages.OBSERVE_NOTES:
      return 'Observe Notes'
    case UrlPageParamToPages.ADD_GROUP:
      return 'Add details'
    case UrlPageParamToPages.CREATION_PASSWORD:
      return 'Password generator'
    case UrlPageParamToPages.PROFILE:
      return 'Profile'
    default:
      return ''
  }
}

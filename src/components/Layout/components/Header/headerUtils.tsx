import { UrlQueryParamToPages } from '@src/pages/MainPageWrapper/MainPageWrapper'

export const getHeaderTitle = ({ query }: { query: string }) => {
  switch (query) {
    case UrlQueryParamToPages.PASSWORD_MANAGER:
      return 'Securel'
    case UrlQueryParamToPages.ADD_GROUP:
      return 'Add details'
    case UrlQueryParamToPages.CREATION_PASSWORD:
      return 'Password generator'
    case UrlQueryParamToPages.SETTINGS:
      return 'Settings'
    default:
      return ''
  }
}
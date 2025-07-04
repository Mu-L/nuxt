declare global {
  var __NUXT_VERSION__: string
  var __NUXT_ASYNC_CONTEXT__: boolean

  interface Navigator {
    connection?: {
      type: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown'
      effectiveType: 'slow-2g' | '2g' | '3g' | '4g'
    }
  }

  interface Window {
    cookieStore?: {
      addEventListener: (type: 'change', listener: (event: any) => void) => void
      removeEventListener: (type: 'change', listener: (event: any) => void) => void
    }
  }
}

export {}

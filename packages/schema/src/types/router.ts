import type { RouterHistory, RouterOptions as _RouterOptions } from 'vue-router'

export type RouterOptions = Partial<Omit<_RouterOptions, 'history' | 'routes'>> & {
  history?: (baseURL?: string) => RouterHistory | null | undefined
  routes?: (_routes: _RouterOptions['routes']) => _RouterOptions['routes'] | Promise<_RouterOptions['routes']>
  hashMode?: boolean
  scrollBehaviorType?: 'smooth' | 'auto'
}

export type RouterConfig = RouterOptions

/**
 * Only JSON serializable router options are configurable from nuxt config
 */
export type RouterConfigSerializable = Pick<RouterConfig, 'linkActiveClass' | 'linkExactActiveClass' | 'end' | 'sensitive' | 'strict' | 'hashMode' | 'scrollBehaviorType'>

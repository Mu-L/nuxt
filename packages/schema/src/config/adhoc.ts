import { defineResolvers } from '../utils/definition'

export default defineResolvers({
  /**
   * Configure Nuxt component auto-registration.
   *
   * Any components in the directories configured here can be used throughout your
   * pages, layouts (and other components) without needing to explicitly import them.
   * @see [`components/` directory documentation](https://nuxt.com/docs/guide/directory-structure/components)
   * @type {boolean | typeof import('../src/types/components').ComponentsOptions | typeof import('../src/types/components').ComponentsOptions['dirs']}
   */
  components: {
    $resolve: (val) => {
      if (Array.isArray(val)) {
        return { dirs: val }
      }
      if (val === undefined || val === true) {
        return { dirs: [{ path: '~/components/global', global: true }, '~/components'] }
      }
      return val
    },
  },

  /**
   * Configure how Nuxt auto-imports composables into your application.
   * @see [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/composables)
   * @type {typeof import('../src/types/imports').ImportsOptions}
   */
  imports: {
    global: false,
    /**
     * Whether to scan your `composables/` and `utils/` directories for composables to auto-import.
     * Auto-imports registered by Nuxt or other modules, such as imports from `vue` or `nuxt`, will still be enabled.
     */
    scan: true,

    /**
     * An array of custom directories that will be auto-imported.
     * Note that this option will not override the default directories (~/composables, ~/utils).
     * @example
     * ```js
     * imports: {
     *   // Auto-import pinia stores defined in `~/stores`
     *   dirs: ['stores']
     * }
     * ```
     */
    dirs: [],
  },

  /**
   * Whether to use the vue-router integration in Nuxt 3. If you do not provide a value it will be
   * enabled if you have a `pages/` directory in your source folder.
   * @type {boolean}
   */
  pages: undefined,

  /**
   * Manually disable nuxt telemetry.
   * @see [Nuxt Telemetry](https://github.com/nuxt/telemetry) for more information.
   * @type {boolean | Record<string, any>}
   */
  telemetry: undefined,

  /**
   * Enable Nuxt DevTools for development.
   *
   * Breaking changes for devtools might not reflect on the version of Nuxt.
   * @see  [Nuxt DevTools](https://devtools.nuxt.com/) for more information.
   * @type { { enabled: boolean, [key: string]: any } }
   */
  devtools: {},
})

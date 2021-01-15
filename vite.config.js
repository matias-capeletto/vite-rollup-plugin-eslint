import vue from '@vitejs/plugin-vue'
import eslint from '@rollup/plugin-eslint'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [{ ...eslint(), enforce: 'pre' }, vue()]
}

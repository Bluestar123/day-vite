import { App } from 'vue'

const plugins = import.meta.globEager('./**/index.ts')
const pluginsMap = Object.values(plugins).map((v) => v.default)

export default (app: App) => {
  pluginsMap.forEach((plugin) => {
    plugin(app)
  })
}

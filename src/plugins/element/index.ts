import { App } from 'vue'
import { ElButton, ElRow } from 'element-plus'

const plugins = [ElButton, ElRow]

export default (app: App) => {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}

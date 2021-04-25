import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import App from './App.vue'
import installPlugins from './plugins'
import 'styles/index.scss'
const app = createApp(App)
// @ts-ignore
import vm from 'virtual-module'
console.log(vm, '---------------')
// 安装第三方包
installPlugins(app)

app.use(store, key)
app.use(router)
app.mount('#app')

import { Plugin } from 'vite'

interface VitePluginExample {
  test?: string
}

export default function Example(options: VitePluginExample): Plugin {
  return {
    name: 'my-example',
    // 确认下id，报名  import 就会发送浏览器请求
    resolveId(source: string) {
      console.log(source, '111111', 'index.ts')

      // source 是个 from 的名
      if (source === 'virtual-module') {
        return source // 返回 source 表明命中，vite 不在询问其他插件处理该id
      }
      return null // 返回null 不需要别的插件处理了
    },
    // 加载模块代码
    load(id: string) {
      console.log(id, '222222', 'index')

      // 不要去 node_modules中查找
      if (id === 'virtual-module') {
        return 'export default "this is a test"'
      }
      return null
    }
  }
}

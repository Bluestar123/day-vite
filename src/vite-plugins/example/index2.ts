import { Plugin } from 'vite'

export default function Example(): Plugin {
  return {
    name: 'my-example',
    // 确认下id，报名  import 就会发送浏览器请求
    resolveId(source: string) {
      console.log(source, '111111', 'index2.ts')

      return source // 返回null 不需要别的插件处理了
    },
    // 加载模块代码
    load(id: string) {
      console.log(id, '222222', 'index2')
      return null
    }
  }
}

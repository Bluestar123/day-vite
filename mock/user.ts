import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: (request) => {
      console.log('request>>>>>>>>>>>>', request.query.id)
      return {
        code: 0,
        message: 'ok',
        data: [{ name: 'tom' }, { name: 'jeery' }]
      }
    }
  }
] as MockMethod[]

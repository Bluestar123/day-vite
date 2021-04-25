import { useStore } from '@/store'

export function test() {
  let store = useStore()
  console.log(store.getters)
  let arr = [store.state.userModule.name, store.getters]
  return arr[0]
}

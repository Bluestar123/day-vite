import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import RootStateTypes from './interface'
import { useStore as baseUseStore } from 'vuex'
import { AllStateTypes } from './interface'

// 子模块
import userModule from './modules/user'

export const store = createStore<RootStateTypes>({
  modules: {
    userModule
  },
  state: {
    count: 0
  },
  getters: {
    count: (state) => state.count
  },
  mutations: {
    increment(state: RootStateTypes) {
      state.count++
    }
  }
})

// 便于 vuex 提示
export const key: InjectionKey<Store<AllStateTypes>> = Symbol()
// 便于导出key，不用每次单独引入
export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}

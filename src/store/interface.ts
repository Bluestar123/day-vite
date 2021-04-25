import UserModuleTypes from './modules/user/interface'

export default interface RootStateTypes {
  count: number
}

// vuex 所有state类型定义集成
export interface AllStateTypes extends RootStateTypes {
  userModule: UserModuleTypes
}

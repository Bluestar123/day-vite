import RootStateTypes from '@/store/interface'
import { GetterTree, Module } from 'vuex'
import UserModuleTypes from './interface'

const getDefaultState = () => {
  return {
    token: '',
    name: 'dsfgdsgf'
  }
}

const state = getDefaultState()

const mutations = {
  getUserName(state: UserModuleTypes, preload: string) {
    state.name = preload
  }
}

const actions = {}

const getters: GetterTree<UserModuleTypes, RootStateTypes> = {
  name: (state) => state.name,
  token: (state) => state.token
}

const userModule: Module<UserModuleTypes, RootStateTypes> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default userModule

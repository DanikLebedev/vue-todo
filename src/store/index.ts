import { createStore } from "vuex";
import ApiService from "@/utils/apiService";
import router from "../router/index";
import {AuthService} from "@/utils/authService";

export default createStore({
  state: {
    todos: [],
    token: AuthService.getToken() || '',
  },
  getters: {
    token: state => state.token
  },
  mutations: {
    setToken: ((state, payload: string) => {
      state.token = payload
    }),
    removeToken: state => {
      state.token = ''
    }
  },
  actions: {
    login: async ({commit}, model) => {
      const response = await ApiService.login(model)
      if(response.status === 200) {
        AuthService.login(response.data.accessToken)
        commit('setToken', response.data.accessToken)
        router.push("/");
      }
    },
    logout: async ({commit}) => {
      commit('removeToken')
      AuthService.logout()
      router.push("/");
    }
  },
  modules: {}
});

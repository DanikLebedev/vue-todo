import { createStore } from 'vuex';
import ApiService from '@/utils/apiService';
import router from '../router/index';
import { AuthService } from '@/utils/authService';
import { Todo } from '@/models/interfaces';

export default createStore({
  state: {
    todos: [] as Todo[],
    token: AuthService.getToken() || '',
    currentTodo: { title: '', done: false } as Todo
  },
  getters: {
    token: (state) => state.token,
    todos: (state) => state.todos,
    currentTodo: (state) => state.currentTodo
  },
  mutations: {
    setToken: (state, payload: string) => {
      state.token = payload;
    },
    removeToken: (state) => {
      state.token = '';
    },
    setTodos: (state, payload: Todo[]) => {
      state.todos = payload;
    },
    setTodoById: (state, payload: Todo) => (state.currentTodo = payload)
  },
  actions: {
    login: async ({ commit }, model) => {
      const response = await ApiService.login(model);
      if (response.status === 200) {
        AuthService.login(response.data.accessToken);
        commit('setToken', response.data.accessToken);
        router.push('/');
      }
    },
    signup: async ({ commit }, model) => {
      const response = await ApiService.signup(model);
      AuthService.login(response.data.accessToken);
      commit('setToken', response.data.accessToken);
      router.push('/');
    },
    logout: async ({ commit }) => {
      commit('removeToken');
      AuthService.logout();
      router.push('/');
    },
    getTodos: async ({ commit }) => {
      const data = await ApiService.getTodos();
      commit('setTodos', data);
    },
    getTodoById: async ({ commit }, id) => {
      const data = await ApiService.getTodoById(id);
      commit('setTodoById', data);
    },
    createTodo: async (_, payload) => {
      const response = await ApiService.createTodo(payload);
      if (response.status === 201) {
        router.push('/todos');
      }
    },
    updateTodo: async ({ dispatch, commit }, payload) => {
      await ApiService.updateTodo(payload);
      await dispatch('getTodos');
      router.push('/todos');
    },
    deleteTodo: async ({ dispatch }, id) => {
      await ApiService.deleteTodo(id);
      await dispatch('getTodos');
    }
  }
});

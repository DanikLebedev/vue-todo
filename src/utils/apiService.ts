import axios from './axios.config';
import { AxiosResponse } from 'axios';

import { DynamicComponent, LoginFormObject, Todo } from '@/models/interfaces';

export default class ApiService {
  static async getTodos(): Promise<Todo[]> {
    const response: AxiosResponse = await axios.get('/todos');
    return response.data;
  }

  static async getTodoById(id: string): Promise<Todo[]> {
    const response: AxiosResponse = await axios.get(`/todos/${id}`);
    return response.data;
  }

  static async createTodo(formObject: Todo) {
    const response: AxiosResponse = await axios.post('/todos', formObject);
    return response;
  }

  static async updateTodo(formObject: Todo) {
    const response: AxiosResponse = await axios.put(`/todos/${formObject.id}`, formObject);
    return response;
  }

  static async signup(formObject: LoginFormObject) {
    const response: AxiosResponse = await axios.post('/signup', formObject);
    return response;
  }

  static async login(formObject: LoginFormObject) {
    const response: AxiosResponse = await axios.post('/login', formObject);
    return response;
  }

  static async deleteTodo(id: string) {
    const response: AxiosResponse = await axios.delete(`/todos/${id}`);
    return response;
  }

  static async getComponents(): Promise<DynamicComponent[]> {
    const response: AxiosResponse = await axios.get(`/components`);
    return response.data;
  }
}

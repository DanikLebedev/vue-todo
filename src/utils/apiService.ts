import axios from './axios.config'
import {AxiosPromise, AxiosResponse} from "axios";

import {AuthService} from "@/utils/authService"
import {LoginFormObject, Todo} from "@/models/interfaces";


export default class ApiService {
    static async getTodos(): Promise<Todo[]> {
        const response: AxiosResponse = await axios.get('/todos');
        return response.data;
    }

    static createTodo() {
        return
    }

    static async signup(formObject: LoginFormObject) {
        const response: AxiosResponse = await axios.post('/signup', formObject);
        return response;
    }

    static async login(formObject: LoginFormObject) {
        const response: AxiosResponse = await axios.post('/login', formObject);
        return response;
    }

    static deleteTodo() {
        return
    }

    static updateTodo() {
        return
    }
}
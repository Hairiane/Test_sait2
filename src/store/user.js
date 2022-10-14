import {defineStore} from "pinia";
import axios from "axios";

export const useUserStore =defineStore('user', {
    state(){
        return {
            token:undefined
        }
    },
    actions: {
       async login(username,password){
           try {
               const response = await axios.post(
                   'http://demo.telminov.ru:8082/user/login/',
                   {username, password}
               )
               this.token = response.data.token
           }
           catch (error){
               return error.response.data
           }
        }
    },
    register(){
        // TODO: реаализовать метод регистрации пользователя
        throw Error('Not implemented')
    }
})
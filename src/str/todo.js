import { defineStore } from 'pinia'
export const useTodoStore = defineStore('main', {
    state(){
    return {
        items: [
            {id: 1, name: 'Купить хлеб', done:true},
            {id: 2, name: 'Купить молоко', done:false}
             ]
        }
    },
    actions: {
        save(){
            console.log('todo saved!')
        }
    }
})
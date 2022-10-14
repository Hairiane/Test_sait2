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
        addItem(){
            this.items.push(
                {id:undefined, name: '', done: false}
            )
        },
        delIndex(id) {
            this.items.splice(id ,1)
        },
        save(){
            console.log('todo saved!')
        }
    }
})
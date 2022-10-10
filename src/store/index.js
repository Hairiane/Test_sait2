import {createStore}  from "vuex"
import todo from "@/store/todo.js";

const store = createStore({
    state: {
            count: 0
    },
    getters: {
      countPlusOne(state){
          return state.count + 1
      }
    },
    actions: {
      async save(context, a ,b){
          console.log('save', a,b)
          context.commit('increment')

      }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    modules: {
    todo
    }
})

export default store
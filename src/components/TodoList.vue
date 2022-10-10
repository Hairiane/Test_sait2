<template>

    <TodoItem
        v-for ="(item,index) in store.items"
        :key="item.id"
        :item="item"
        :index="index"
        @delIndex="delIndex(index)"
        :is-edit='false'
    />
</template>

<script>
import {useTodoStore} from "@/store/todo";
import TodoItem from "@/components/TodoItem.vue";

export  default {
    name:'TodoList',
    data() {
      return {
        store: useTodoStore(),
      }
  },
  methods:{
      addItems() {
    this.store.addItem()
    },
      delIndex(title){
        this.store.delIndex(title)
      }
  },
  components:{
    TodoItem
  }
}
</script>

<style scoped>
</style>
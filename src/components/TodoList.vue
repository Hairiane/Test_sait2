<template>

    <TodoItem
        v-for ="(item,index) in store.items"
        :key="item.id"
        :item="item"
        :index="index"
    />
</template>

<script>
import {useTodoStore} from "@/str/todo";
import TodoItem from "@/components/TodoItem.vue";

export  default {
    name:'TodoList',
    data() {
      return {
        store: useTodoStore(),
      }
  },
  components:{
    TodoItem
  }
}
</script>

<style scoped>
</style>
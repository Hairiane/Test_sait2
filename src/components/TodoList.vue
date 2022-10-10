<template>

    <TodoItem
        v-for ="(item,index) in store.items"
        :key="item.id"
        :item="item"
        :index="index"
    />
<el-button
    type = "success"
    @click =addItems
>
  <el-icon class = "el-icon--left" ><plus/></el-icon>
  Добавить</el-button>

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
    }
  },
  components:{
    TodoItem
  }
}
</script>

<style scoped>
</style>
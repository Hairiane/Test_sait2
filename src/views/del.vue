<template>

    <TodoItem
      v-for ="(item,index) in store.items"
      :key="item.id"
      :item="item"
      :index="index"
      :is-edit="true"
  />

  <el-button
      type = "success"
      @click = delIndex
  >
    <el-icon class = "el-icon--left" ><minus/></el-icon>
    Удалить</el-button>
  <el-col :span ="2">
    <el-input
        v-model="title"
        placeholder="Please input"
        type="Number"
    />
  </el-col>

</template>

<script >
import {useTodoStore} from "@/store/todo";
import TodoItem from "@/components/TodoItem.vue";

export  default {
  name: 'TodoList',
  data() {
    return {
      store: useTodoStore(),
      title: "",
    }
  },
  methods: {
    addItems() {
      this.store.addItem()
    },
    delIndex(title){
      this.store.delIndex(this.title-1)
    },
  },
    components: {
      TodoItem
    }
}
</script>
<style scoped>
</style>
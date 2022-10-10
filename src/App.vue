<template>
    <el-container>
      <el-header>
        <h1>Список дел</h1>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <el-link
            href="https://element.eleme.io"
            target="_blank"
        >
          default
        </el-link>
      </el-footer>
    </el-container>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
export  default {
  components: {
    TodoList
  },
}
</script>

<style>

</style>

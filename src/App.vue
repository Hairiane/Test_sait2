<template>
    <el-container>
      <el-header>
        <el-row >
        <router-link to="/add"><el-button type="primary">Добавить</el-button></router-link>
        <router-link to="/"><el-button type="primary">Список</el-button></router-link>
        <router-link to="/del"><el-button type="primary">Удалить</el-button></router-link>
        </el-row>
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

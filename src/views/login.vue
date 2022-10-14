<template>
   Username:
  <el-row :gutter="1">
    <el-col :span ="1"></el-col>
      <el-col :span ="5">
        <el-input type="text"
            placeholder="Название" v-model="username" />
      </el-col>
  </el-row>
   Password:
  <el-row :gutter="20">
    <el-col :span ="1"></el-col>
    <el-col :span ="5">
      <el-input type="text"
          placeholder="Название" v-model="password" />
    </el-col>
  </el-row>
  <el-button type="primary"
             @click = "Login"
  >Войти</el-button>
</template>

<script>
import {useUserStore} from "@/store/user";
import router from "@/router";


export default {
  name: "login",
  data() {
    return {
      userStore: useUserStore(),
      username: '',
      password: ''
    }
  },
  props: {
  },
  mounted() {
     this.userStore.login('use4r','123456748')
  },
  methods: {
   async Login(){
       const result= await this.userStore.login(this.username,this.password)
     console.log(result)
     if(result?.username) alert(result.username[0])
     if (result?.password) alert(result.password[0])
     if (!result) router.push({ url: '/Home' })
    }
  }
}
</script>

<style scoped>

</style>
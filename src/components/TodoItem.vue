<template>
  <el-row :gutter="20">
    <el-col :span ="1"></el-col>
    <el-tag style="height: 100%">
      {{ index + 1}}
    </el-tag>

    <el-col :span ="20">
      <el-input placeholder="Название" v-model="item.name" />
    </el-col>

    <el-col :span ="1">
      <el-checkbox
          @change="itemDoneChanged"
          v-model="item.done"
          size="large"
          label = "Сделано"
      />
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    index: Number,
    item: Object,
  },
  emits:['itemDoneChanged'],
  methods:{
    itemDoneChanged(){
      this.$emit('itemDoneChanged',this.item)
    },
  }
}
</script>

<style scoped>
.el-row{
  margin-bottom: 20px;
}
</style>
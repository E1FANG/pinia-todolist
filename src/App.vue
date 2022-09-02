<script setup lang="ts">
import  Todo  from "./components/Todo.vue";
import {useTodoStore} from './stores'
import TableView from './views/tableView/index.vue'

const todoStore = useTodoStore()

 </script>

<template>
  <div>
    <Todo/>
    <el-card>
      <TableView/>
    </el-card>
  </div>
</template>

 <style lang="scss" scoped>

</style>
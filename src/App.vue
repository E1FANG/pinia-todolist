<script setup lang="ts">
import { useRouter } from "vue-router";
import  Todo  from "./components/Todo.vue";
import TableView from './views/tableView/index.vue'

const router = useRouter()
const changeRoute = (path:string,id:number)=>{
  router.push({
    path,
    query:{
      id
    }
  })
}

 </script>

<template>
  <div>
    <Todo/>
    <el-card>
      <TableView/>
    </el-card>
    <RouterView/>
    <el-button @click="changeRoute('/foo',12345678)">foo</el-button>
    <el-button @click="changeRoute('/bar',87654321)">bar</el-button>
  </div>
</template>

 <style lang="scss" scoped>

</style>
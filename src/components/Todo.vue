<script setup lang="ts">

import { useTodoStore } from "../stores";
import TodoItem from "./TodoItem.vue";


const todoStore = useTodoStore()


</script>

<template>
  <div v-loading="todoStore.listLoading">
    there are {{ todoStore.itemsCount }} todo item
    <div>
      <input type="text" v-model="todoStore.newItem">
      <el-button @click="todoStore.addItem">add</el-button>
      <ul>
        <li v-for="item in todoStore.items" :key="item.id">
          <TodoItem :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

 <style lang="scss" scoped>
 </style>
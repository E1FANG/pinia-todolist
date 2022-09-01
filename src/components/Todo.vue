<script setup lang="ts">

import { useTodoStore } from "../stores";
import TodoItem from "./TodoItem.vue";


const todoStore = useTodoStore()


</script>

<template>
  <div class="card-wrap">
    <el-card class="box-card" v-loading="todoStore.listLoading">
      <template #header>
        <div class="card-header">
          <span>Todo List</span>
          <el-button class="button" text>count:{{ todoStore.itemsCount }}</el-button>
        </div>
      </template>
      <div>
        <div class="input-content">
          <el-input type="text" v-model="todoStore.newItem" />
          <el-button @click="todoStore.addItem">add</el-button>
        </div>
        <ul>
          <li v-for="item in todoStore.items" :key="item.id">
            <TodoItem :item="item" />
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

 <style lang="scss" scoped>
 .card-wrap {
   width: 600px;
 
   .input-content {
     ::v-deep .el-input {
       margin-right: 30px;
     }
 
     display: flex;
   }
 }
 
 .card-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 
 ul {
   padding: 0;
   padding-left: 2px;
 }
 
 li {
   width: 100%;
   display: flex;
   justify-content: space-between;
   padding: 2px 0;
 }
 </style>
<script setup lang="ts">

import { onMounted } from "vue";
import { getTodoList } from '../api/todo';
import { useTodoStore } from "../stores";
import TodoItem from "./TodoItem.vue";


const todoStore = useTodoStore()


const addItem = async () => {
  const r = await todoStore.addItem()
  console.log(1111, r);
}

onMounted(() => {
  getTodoList().then(res => {
    console.log(res.data);
  })
})

</script>

<template>
  <div>
    there are {{ todoStore.itemsCount }} todo item
    <div>
      <input type="text" v-model="todoStore.newItem">
      <button @click="addItem">add</button>
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
<script setup lang="ts">
import { Item, useTodoStore } from '../stores';
const todoStore = useTodoStore()
  defineProps<{
    item:Item
  }>()
 </script>

<template>
<li>
  {{item.context}}
  <button @click="todoStore.removeItem(item)">remove</button>
</li>
</template>

 <style lang="scss" scoped>

</style>
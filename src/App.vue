<script setup lang="ts">
import  Todo  from "./components/Todo.vue";
import {useTodoStore} from './stores'

const todoStore = useTodoStore()

 </script>

<template>
  <div>
    <Todo/>
  </div>
</template>

 <style lang="scss" scoped>

</style>
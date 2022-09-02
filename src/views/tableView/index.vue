<script setup lang="ts">
import { getTableData } from "../../api/table-mock";
import ProTable from "../../components/pro-table/index.vue";

// type 

const request = async () => {
  const result = await getTableData()
  if (result.success) {
    return {
      success: result.success,
      data: result.data
    }
  }
}
</script>

<template>
  <ProTable :request="request" />
</template>

 <style lang="scss" scoped>
 </style>
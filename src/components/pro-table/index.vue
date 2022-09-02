<script setup lang="ts">
import { Table,TableColumnType } from "ant-design-vue";
import { onMounted, ref, toRefs } from "vue";

const props = defineProps<{
  request: () => Promise<ManageResult<tableItem[]>>
}>()

const {
  request
} = toRefs(props)

const dataSource = ref<tableItem[]>([])
const tableLoading = ref(false)

onMounted(async () => {
  tableLoading.value = true
  const { data } = await request.value()
  dataSource.value = data
  tableLoading.value = false
  console.log(dataSource.value);
})


const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
</script>

<template>
  <div class="pro-table">
    <a-table :loading="tableLoading" :dataSource="dataSource" :columns="columns" />
  </div>
</template>

 <style lang="scss" scoped>
 </style>
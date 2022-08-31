import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { addTodoItem, deleteTodoItem, getTodoList } from '../api/todo'

let id = 1

const generateId = () => {
  return id++
}


export const useTodoStore = defineStore('todo', () => {

  const listLoading = ref(false)

  const newItem = ref("")

  const items = ref<Item[]>([])

  const itemsCount = computed(() => items.value.length)

  const initTodoList = async()=>{
    listLoading.value = true
    const result = await getTodoList()
    if(result.success){
      items.value = result.data
    }
    listLoading.value = false
  }
  

  const addItem = async () => {
    if(newItem.value === ''){
      ElMessage({
        type:'error',
        message:'please input your todo item'
      })
      return 
    }
    listLoading.value = true
    const result = await addTodoItem({
      id: generateId(),
      context: newItem.value
    })
    if(result.success){
      items.value.push(result.data)
    }
    newItem.value = ''
    listLoading.value = false
  }

  const removeItem = async (item: Item) => {
    listLoading.value  = true
    const result = await deleteTodoItem(item)
    if(result.success){
      const index = items.value.indexOf(item)
      items.value.splice(index, 1)
    }
    listLoading.value  = false
  }


  initTodoList()
  return {
    newItem,
    removeItem,
    items,
    addItem,
    itemsCount,
    listLoading
  }
})
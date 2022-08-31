import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

let id = 1

const generateId = () => {
  return id++
}

export const useTodoStore = defineStore('todo', () => {

  const newItem = ref("")

  const items = reactive<Item[]>([])

  const itemsCount = computed(() => items.length)

  const addItem = async () => {
    items.push({
      id: generateId(),
      context: newItem.value
    })
    newItem.value = ''
    return 12312321
  }

  const removeItem = (item: Item) => {
    const index = items.indexOf(item)
    items.splice(index, 1)
  }

  return {
    newItem,
    removeItem,
    items,
    addItem,
    itemsCount
  }
})
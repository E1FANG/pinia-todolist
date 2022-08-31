import  request from "../request";

type ManageResult<T> = {
  success: boolean
  data: T
}

type PromiseResult<K> = Promise<ManageResult<K>>

export const getTodoList =  ():PromiseResult<Item[]>=>request({
  method:'get',
  url:'/todo/list'
})

export const addTodoItem = (item: Item): PromiseResult<Item> => request({
  method:'post',
  url:'/todo/addTodoItem', 
  data:{...item}
})

export const deleteTodoItem = (item:Item):PromiseResult<Item>=>request({
  method:'post',
  url:'/todo/deleteTodoItem',
  data:{...item}
})
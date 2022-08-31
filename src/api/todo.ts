import { request } from "../request";

type ManageResult<T> = {
  success:boolean
  data:T
}

type PromiseResult<K> = Promise<ManageResult<K>>

export const getTodoList = ():PromiseResult<Item[]>=>request.get('/todolist/list')

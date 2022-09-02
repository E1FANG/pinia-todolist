declare type Item = {
  id: number
  context: string
}


declare type ManageResult<T> = {
  success: boolean
  data: T
}

declare type PromiseResult<K> = Promise<ManageResult<K>>
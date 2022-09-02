import request from "../request";

export const getTableData = (): PromiseResult<tableItem[]>=>request({
  method:'get',
  url:'/todo/getTableData'
})
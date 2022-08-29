// 引入封装好的axios
import requests from './request'
// 所有请求的接口
// 三级联动接口：api/product/getBaseCategoryList get 无参数
// 发请求：axios发请求返回数据结果为Promise对象

// 分类api
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
export const bar = 'bar'

import request from '..';

// 获取高性价比房源数据
export const getHomeGoodPriceData =() => {
  return request.get({
    url: "/home/goodprice"
  })
}

import request from '..';
export const getHomeGoodPriceData =() => {
  return request.get({
    url: "/home/goodprice"
  })
}
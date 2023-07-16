import request from "..";

// 获取高性价比房源数据
export const getHomeGoodPriceData = () => {
  return request.get({
    url: "/home/goodprice",
  });
};

// 获取高评分房源数据
export const getHomeHighScoreData = () => {
  return request.get({
    url: "/home/highscore",
  });
};

// 获取折扣数据
export const getHomeDiscountData = () => {
  return request.get({
    url: "/home/discount",
  });
};

// 获取推荐数据
export const getHomeRecommendData = () => {
  return request.get({
    url: "/home/hotrecommenddest",
  });
};

// 获取向往的数据
export const getgHomeLongForData = () => {
  return request.get({
    url: "/home/longfor",
  });
};

// 获取plus数据
export const getHomePlusData = () => {
  return request.get({
    url: "/home/plus",
  });
};

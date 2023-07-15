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

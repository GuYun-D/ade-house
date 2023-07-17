import request from "..";

export const getEntireRoomList = (offset = 0, size = 20) => {
  console.log(2);
  return request.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
};

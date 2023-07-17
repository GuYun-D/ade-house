import {
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_COUNT,
  CHANGE_ROOM_LIST,
} from "./constants";

const initialState = {
  currentPage: 0, // 当前的页码
  roomList: [], // 房间列表
  totalCount: 0, // 数据总条数
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList };
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
}

export default reducer;

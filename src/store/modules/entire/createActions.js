import { getEntireRoomList } from "@/service/modules/entire";

import {
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_COUNT,
  CHANGE_ROOM_LIST,
  CHANGE_IS_LOADING,
} from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: CHANGE_IS_LOADING,
  isLoading,
});

export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    dispatch(changeIsLoadingAction(true));
    const currentPage = getState().entire.currentPage;
    const res = await getEntireRoomList(currentPage * 20);
    dispatch(changeIsLoadingAction(false));
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};

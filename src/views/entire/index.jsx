import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style';
import EntireFilter from './c-cpns/entire-filter/index';
import EntireRoom from './c-cpns/entire-rooms/index';
import EntirePagination from './c-cpns/entire-pagination/index';
import { useDispatch } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/createActions';

const Entire = memo(() => {
  const dispatch = useDispatch()


  
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRoom></EntireRoom>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire
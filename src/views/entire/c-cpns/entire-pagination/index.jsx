import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper } from './style'
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
  const dispatch = useDispatch()

  const { totalCount, currentPage, roomList } = useSelector(state => {
    return {
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }
  })


  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  //  页码发生变化
  const handlePageSizeChange = (count) => {
    window.scrollTo(0, 0)
    dispatch(changeCurrentPageAction(count - 1))
    dispatch(fetchRoomListAction(totalCount))
  }

  return (
    <PaginationWrapper>
      {
        roomList.length && <div className="info">
          <Pagination defaultCurrent={1} total={50} onChange={handlePageSizeChange} />
          <div className='tip'>第 {startCount} - {endCount} 房源，共超过 {totalCount} 个</div>
        </div>
      }
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination
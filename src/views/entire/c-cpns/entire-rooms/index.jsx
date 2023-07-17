import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import RoomItem from './../../../../components/room-item/index';
import { EntireRoomWrapper } from './style';

const EntireRoom = memo((props) => {

  const { roomList, isLoading, totalCount } = useSelector(state => {
    return {
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading,
      totalCount: state.entire.totalCount
    }
  }, shallowEqual)

  return (
    <EntireRoomWrapper >
      <h2 className='title'>共{totalCount}处住所</h2>
      {isLoading && <div className="cover"></div>}
      <div className="list">
        {
          roomList.map(item => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id}></RoomItem>
          })
        }
      </div>

    </EntireRoomWrapper>

  )
})

EntireRoom.propTypes = {}

export default EntireRoom
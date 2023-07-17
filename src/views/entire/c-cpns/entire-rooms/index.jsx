import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import RoomItem from './../../../../components/room-item/index';
import { EntireRoomWrapper } from './style';

const EntireRoom = memo((props) => {

  const { roomList } = useSelector(state => {
    return {
      roomList: state.entire.roomList
    }
  })

  return (
    <EntireRoomWrapper>
      <h2 className='title'>共xx处住所</h2>
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
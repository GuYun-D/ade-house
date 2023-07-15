import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "@/components/room-item";
import { SectionRoomsWrapper } from "./style";

const SectionRomms = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <SectionRoomsWrapper className="room-list">
      {roomList.slice(0, 8)?.map((item) => {
        return (
          <RoomItem
            key={item.title}
            itemWidth={itemWidth}
            itemData={item}
          ></RoomItem>
        );
      })}
    </SectionRoomsWrapper>
  );
});

SectionRomms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string
};

export default SectionRomms;

import PropTypes from "prop-types";
import React, { memo } from "react";
import { Rate } from "antd";
import { RoomWrapper } from "./style";
import { useNavigate } from 'react-router-dom';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;

  const navigate = useNavigate()
  const handleToDetail = () => {
    navigate('/detail')
  }

  return (
    <RoomWrapper
      onClick={handleToDetail}
      itemWidth={itemWidth}
      verifyInfo={itemData?.verifyInfo?.text_color || "#39576a"}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
      </div>
      <div className="desc">{itemData.verify_info.messages.join(".")}</div>
      <div className="name">{itemData.name}</div>
      <div className="price">￥{itemData.price}/晚</div>
      <div className="bottom">
        <Rate
          value={itemData.star_rating ?? 4.5}
          disabled
          allowHalf
          count={5}
          style={{ color: "#00848A", fontSize: "12px" }}
        ></Rate>

        <div className="count">{itemData.reviews_count}</div>
        {itemData.bottom_info && (
          <div className="extra"> · {itemData?.bottom_info?.content}</div>
        )}
      </div>
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
};

export default RoomItem;

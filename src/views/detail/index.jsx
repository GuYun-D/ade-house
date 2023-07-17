import React, { memo, useState } from "react";
import PictureView from '@/base-ui/picture-view/index';
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const [showPictureView, setshowPictureView] = useState(false)
  const imgList = [require('@/assets/img/j1.webp'), require('@/assets/img/j2.webp'), require('@/assets/img/j3.webp'), require('@/assets/img/j4.webp'), require('@/assets/img/j5.webp'), require('@/assets/img/j6.webp')]

  const handleShowView = () => {
    setshowPictureView(true)
  }

  return <DetailWrapper>
    <div className="img-list">
      <div className="main-img">
        <img style={{ width: '100%', cursor: 'pointer' }} src={imgList[0]} alt="" />
      </div>

      <div className="small-img">
        <div className="img-warpper"><img src={imgList[1]} alt="" /></div>
        <div className="img-warpper"><img src={imgList[2]} alt="" /></div>
        <div className="img-warpper"><img src={imgList[3]} alt="" /></div>
        <div className="img-warpper"><img src={imgList[4]} alt="" /></div>
        <div className="show-all-btn" onClick={handleShowView}>
          显示更多
        </div>
      </div>
    </div>
    {showPictureView && <PictureView pictures={imgList} closeClick={e => setshowPictureView(false)}></PictureView>}
  </DetailWrapper>;
});

export default Detail;

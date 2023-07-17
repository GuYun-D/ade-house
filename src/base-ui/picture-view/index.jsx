import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { PictureViewWrapper } from './style';
import IconClose from '@/assets/svg/icon-close';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const PictureView = memo((props) => {
  const { closeClick, pictures } = props
  // 当开始浏览的时候。禁止滚动
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)

  const closeBtnClick = () => {
    if (closeClick) {
      closeClick()
    }
  }

  const handleControlClick = (isRightArrow) => {
    let newIndex = isRightArrow ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictures.length - 1
    if (newIndex > pictures.length - 1) newIndex = 0

    setCurrentIndex(newIndex)
    setIsNext(isRightArrow)
  }
  return (
    <PictureViewWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClick}>
          <IconClose></IconClose>
        </div>
      </div>

      <div className="silder">
        <div className="control">
          <div className="btn left" onClick={e => handleControlClick(false)}>
            <IconArrowLeft width="77" height="77"></IconArrowLeft>
          </div>
          <div className="container">
            <SwitchTransition mode='in-out'>
              <CSSTransition key={pictures[currentIndex]} className="pic" timeout={2000}>
                <img src={pictures[currentIndex]} alt="" />
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="btn right" onClick={e => handleControlClick(true)}>
            <IconArrowRight width="77" height="77"></IconArrowRight>
          </div>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className='count'>
              <span>15/30:</span>
              <span>room 图片15</span>
            </div>

            <div className="toggle">
              <span>隐藏照片列表</span>
              <span>v</span>
              <span>^</span>
            </div>
          </div>
        </div>
      </div>
    </PictureViewWrapper>
  )
})

PictureView.propTypes = {}

export default PictureView
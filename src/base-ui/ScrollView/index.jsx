import PropTypes from "prop-types";
import React, { memo, useState, useEffect, useRef } from "react";
import { ScrollViewWrapper } from "./style";
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [posIndex, setPosIndex] = useState(0)
  /**
   * 这里不使用useState的原因是，totalDistance是不会发生改变的，
   * 如果setTotalDistance，页面就会重新渲染，所以没有必要，使用useRef可以保持状态，即使是组件重新渲染
   */
  // const [totalDistance, setTotalDistance] = useState(0)
  const totalDistanceRef = useRef()

  // 当组件渲染完毕之后，判断是否显示右侧按钮
  const scrollViewRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollViewRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollViewRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    setShowRight(totalDistance > 0)
    totalDistanceRef.current = totalDistance
  }, [props.children])

  // 事件监听
  const controlScroll = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollViewRef.current.children[newIndex]
    const newElOffsetLeft = newEl.offsetLeft

    scrollViewRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
    setPosIndex(newIndex)

    // 是否继续显示右侧按钮
    setShowRight(totalDistanceRef.current > newElOffsetLeft)
    setShowLeft(newElOffsetLeft > 0)
  }

  return (
    <ScrollViewWrapper>

      {showLeft && <div className="control left" onClick={e => controlScroll(false)}>
        <IconArrowLeft></IconArrowLeft>
      </div>}
      {showRight && <div className="control right" onClick={e => controlScroll(true)}>
        <IconArrowRight></IconArrowRight>
      </div>}

      <div className="scroll">
        <div className="scroll-content" ref={scrollViewRef}>{props.children}</div>
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;

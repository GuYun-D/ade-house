import React, { memo, useState, useEffect } from "react";

import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import IconMenu from "@/assets/svg/icon-menu";
import IconAvatar from "@/assets/svg/icon-avatar";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  // 副作用代码
  useEffect(() => {
    function windowHnadleClick() {
      setShowPanel(false);
    }

    window.addEventListener("click", windowHnadleClick, true);

    return () => {
      window.removeEventListener("click", windowHnadleClick, true);
    };
  }, []);

  // 事件处理函数
  function handleShowPanel() {
    setShowPanel(true);
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>

      <div className="profile" onClick={handleShowPanel}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>

        {/* 弹出 */}
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;

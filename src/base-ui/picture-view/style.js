import { styled } from "styled-components";
export const PictureViewWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: fixed;
  flex-direction: column;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #000;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .silder {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .container {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;

      img {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
  }

  .preview {
    height: 100px;
    margin-top: 10px;
  }

  .pic-enter {
    transform: translateX(${(props) => (props.isNext ? "100%" : "-100%")});
  }

  .pic-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 200ms esae;
  }

  .pic-exit {
    opacity: 1;
  }

  .pic-exit-active {
    opacity: 0;
  }
`;

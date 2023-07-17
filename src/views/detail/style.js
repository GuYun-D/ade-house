import styled from "styled-components";

export const DetailWrapper = styled.div`
  img {
    object-fit: cover;
    cursor: pointer;
    transition: all 350ms;

    &:hover {
      transform: scale(1.2);
    }
  }

  .img-list {
    display: flex;
    height: 800px;
    .main-img {
      width: 50vw;
      height: 704px;
      overflow: hidden;
    }

    .small-img {
      position: relative;
      width: 50vw;
      display: flex;
      flex-wrap: wrap;
      height: 700px;

      .img-warpper {
        flex: 0 0 24.6vw;
        height: 350px;
        border: 1px solid #000;
        overflow: hidden;
        box-sizing: border-box;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .show-all-btn {
        position: absolute;
        bottom: 20px;
        right: 20px;
        font-size: 14px;
        padding: 10px 20px;
        background-color: #ccc;
        border-radius: 20px;
        cursor: pointer;
        ${(props) => props.theme.mixin.boxShadow}
      }
    }
  }
`;

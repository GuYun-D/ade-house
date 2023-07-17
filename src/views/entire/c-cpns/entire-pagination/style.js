import { styled } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .ant-pagination-item {
    border: none;
    color: #3d3d3d;
    margin: 0 10px;
    border-radius: 50%;

    &.ant-pagination-item-active {
      background-color: #222;

      a {
        color: #fff;
      }
    }
  }

  .tip {
    margin-top: 30px;
    color: #3d3d3d;
  }
`;

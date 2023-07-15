import styled from 'styled-components';

export const SectionFooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;

  .info {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    color: #000;

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 10px;
    }
  }
`;

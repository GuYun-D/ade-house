import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  align-items: center;
  color: ${(props) => props.theme.color.primaryColor};

  .logo {
    cursor: pointer;
    margin-left: 24px;
  }
`;

import styled from "styled-components";
import coverImg from "@/assets/img/cover_01.jpeg";

/**
 * 如果使用require的话就是 url(${require('xxxx')[.default]})
 */
export const HomeBannerWrapper = styled.div`
  height: 529px;
  background: url(${coverImg}) center/cover;
`;

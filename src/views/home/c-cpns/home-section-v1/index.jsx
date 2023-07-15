import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header/index";
import SectionRooms from "@/components/section-roms/index";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={infoData.title}></SectionHeader>
      <SectionRooms itemWidth="25%" roomList={infoData.list}></SectionRooms>
    </HomeSectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;

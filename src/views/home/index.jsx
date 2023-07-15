import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner/index";
import { fetchHomeDateAtion } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1/index";
import SectionHeader from "@/components/section-header/index";
import SectionRooms from "@/components/section-roms/index";

const Home = memo(() => {
  const dispatch = useDispatch();

  const { goodPriceInfo, highScoreInfo, disCountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      disCountInfo: state.home.disCountInfo,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchHomeDateAtion());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>

      <div className="content">
        <div className="discount-data" style={{ marginTop: "40px" }}>
          <SectionHeader
            title={disCountInfo.title}
            subTitle={disCountInfo.subtitle}
          ></SectionHeader>

          <SectionRooms
            itemWidth="33.333%"
            roomList={disCountInfo?.dest_list?.["成都"]}
          ></SectionRooms>
        </div>
        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
      </div>
    </HomeWrapper>
  );
});

export default Home;

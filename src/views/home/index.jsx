import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner/index";
import { fetchHomeDateAtion } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1/index";
import HomeSectionV2 from "./c-cpns/home-section-v2/index";
import { isEmptyObject } from "@/utils/is-empty-object";

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
        {isEmptyObject(disCountInfo) && (
          <HomeSectionV2 infoData={disCountInfo}></HomeSectionV2>
        )}
        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
      </div>
    </HomeWrapper>
  );
});

export default Home;

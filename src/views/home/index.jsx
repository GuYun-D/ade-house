import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner/index";
import { fetchHomeDateAtion } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import SectionRomms from "@/components/section-roms/index";

const Home = memo(() => {
  const dispatch = useDispatch();

  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
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
        <SectionHeader title={goodPriceInfo.title}></SectionHeader>
        <SectionRomms roomList={goodPriceInfo.list}></SectionRomms>
      </div>
    </HomeWrapper>
  );
});

export default Home;

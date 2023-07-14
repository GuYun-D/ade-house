import React, { memo } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner/index";

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
    </HomeWrapper>
  );
});

export default Home;

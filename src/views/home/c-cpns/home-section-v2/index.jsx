import PropTypes from 'prop-types';
import React, { memo, useState, useCallback } from 'react';
import { HomeSectionV2Wrapper } from './style';
import SectionHeader from '@/components/section-header/index';
import SectionRooms from '@/components/section-roms/index';
import SectionTab from '@/components/section-tabs/index';
import SectionFooter from '@/components/section-footer/index';

/**
 * 关于为什么需要这样来渲染组件
 * {isEmptyObject(disCountInfo) && ( <HomeSectionV2 infoData={disCountInfo}></HomeSectionV2> )}
 * 因为useState的初始值只在组件第一次渲染组件才会有效，当我们组件挂载的时候，组件就会渲染一次，如果接口还么拿到数据
 * 当接口返回数据之后，又会重新渲染一次组件，但是对于hook来说就没得用了，渲染两次组件
 *
 * 解决方法2：
 * 使用useEffect(()=> { setName() }, [infoData])
 * 这样做的话组件就会渲染三次，得不偿失
 */

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  const initAddress = Object.keys(infoData.dest_list)[0];
  const [currentAddressName, setcurrentAddressName] = useState(initAddress);
  // 数据的转换
  const tabNams = infoData.dest_address?.map((item) => item.name);

  // 点击item
  const onClickItem = useCallback((index, name) => {
    setcurrentAddressName(name);
  }, []);
  return (
    <HomeSectionV2Wrapper>
      <div className="discount-data" style={{ marginTop: '40px' }}>
        <SectionHeader title={infoData.title} subTitle={infoData.subtitle}></SectionHeader>
        <SectionTab tabNames={tabNams} tabClick={onClickItem}></SectionTab>
        <SectionRooms itemWidth="33.333%" roomList={infoData?.dest_list?.[currentAddressName]}></SectionRooms>
        <SectionFooter name={currentAddressName}></SectionFooter>
      </div>
    </HomeSectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV2;

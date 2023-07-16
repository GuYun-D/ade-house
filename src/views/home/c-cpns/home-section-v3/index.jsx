import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style';
import SectionHeader from '@/components/section-header/index';
import ScrollView from '@/base-ui/ScrollView';
import RoomItem from '@/components/room-item/index';

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}></SectionHeader>

      <div className="room-list">
        <ScrollView>
          {
            infoData?.list?.map(item => {
              return <RoomItem key={item.id} itemData={item}></RoomItem>
            })
          }
        </ScrollView>
      </div>

    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header';
import { HomeLongforWrapper } from './style';
import LongforItem from '@/components/longfor-item';
import  ScrollView  from '@/base-ui/ScrollView';

const HomeLongfo = memo((props) => {
  const { infoData } = props
  return (
    <HomeLongforWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}></SectionHeader>

      <div className="longfor-list">
        <ScrollView>
          {
            infoData?.list?.map(item => {
              return <LongforItem itemData={item}></LongforItem>
            })
          }
        </ScrollView>
      </div>
    </HomeLongforWrapper>
  )
})

HomeLongfo.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfo
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { TabsWrapper } from './style';
import ScrollView from '@/base-ui/ScrollView';

const SectionTab = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setcurrentIndex] = useState(0);

  function handleClickItem(index, name) {
    setcurrentIndex(index);
    tabClick(index, name);
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div key={index} className={classNames('item', { active: index === currentIndex })} onClick={(e) => handleClickItem(index, item)}>
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTab.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
};

export default SectionTab;

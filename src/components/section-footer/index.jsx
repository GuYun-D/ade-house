import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { SectionFooterWrapper } from './style';
import IconMoreArrow from '@/assets/svg/icon-more-arrow';
import { useNavigate } from 'react-router-dom';

const SectionFooter = memo((props) => {
  const { name } = props;

  let showMessage = '显示全部';
  if (name) {
    showMessage = `显示更多${name}房源`;
  }

  const navigate = useNavigate()
  const handleToPage = () => {
    navigate("/entire")
  }

  return (
    <SectionFooterWrapper>
      <div className="info" onClick={handleToPage}>
        <div className="text">{showMessage}</div>
        <IconMoreArrow></IconMoreArrow>
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string
};

export default SectionFooter;

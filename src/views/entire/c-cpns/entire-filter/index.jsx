import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style';
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames';

const EntireFilter = memo((props) => {
  const [selectItems, setselectItems] = useState([])


  const itemClickSelect = (item) => {
    const newItems = [...selectItems]

    if (selectItems.includes(item)) {
      newItems = newItems.filter(filterItem => filterItem !== item)
    } else {
      newItems.push(item)
    }
    setselectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return <div onClick={e => itemClickSelect(item)} className={classNames('item', { active: selectItems.includes(item) })} key={item}>{item}</div>
          })
        }
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter
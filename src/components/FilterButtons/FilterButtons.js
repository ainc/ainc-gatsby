import * as React from 'react'
import * as styles from './FilterButtons.module.scss'

const FilterButtons = ({ data, filterAttribute, setData, filters }) => {
  const getNestedAttribute = (object, attribute) => {
    let currObj = object
    for (let attr of attribute.split('.')) {
      currObj = currObj[attr]
    }
    return currObj
  }
  
  const filterData = (filter) => {
    const newData = data.filter((item) => {
      return getNestedAttribute(item, filterAttribute) === filter
    })
    setData(newData)
  }
  
  return (
    <div className={styles.thinMargin}>
      <button className={styles.noLine} onClick={ () => setData(data) }>
        All Cohorts
      </button>
      {filters.map((filterObj) => {
        return (
          <button onClick={ () => filterData(filterObj.filter) }>
            {filterObj.display}
          </button>
        );
      })}
    </div>
  )
}

export default FilterButtons
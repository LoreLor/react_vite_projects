import React, { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'
import './Filters.css'

const Filters = () => {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeRange = (e) => {
    // OJO 2 fuentes de la verdad:
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          name='price'
          id='minPriceFilterId'
          value={filters.minPrice}
          min='0'
          max='1749'
          onChange={handleChangeRange}
        />
        <span>$ {filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>Select</option>
          <option value='fragrances'>Fragances</option>
          <option value='groceries'>Groceries</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='laptops'>Laptops</option>
          <option value='skincare'>Skin Care</option>
          <option value='smartphones'>Smart Phones</option>
        </select>
      </div>

    </section>
  )
}

export default Filters

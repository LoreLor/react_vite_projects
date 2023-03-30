import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CategoryWrapper = styled.div`
  padding: 20px;
  border: 1px solid transparent;
  transition: var(--transition);
  margin-bottom: 30px;


  .category-item-img {
    img {
      max-width: 110px;
      transition: var(--transition);
     &:hover{
        transform: scale(.9)
     } 
    }
  }

  .category-item-name {
    margin-top: 24px;
    h6 {
      font-size: 15px;
    }
  }
  &:hover {
    border: 2px solid var(--clr-violet);
  }
`

const Category = ({ image, category }) => {
  return (
    <Link to={`/category/${category}`}>
      <CategoryWrapper className='flex flex-column bg-alice-blue'>
        <div className='category-item-img'>
          <img src={image} alt={category} />
        </div>
        <div className='category-item-name'>
          <h6>{category}</h6>
        </div>
        Category
      </CategoryWrapper>
    </Link>
  )
}

export default Category
